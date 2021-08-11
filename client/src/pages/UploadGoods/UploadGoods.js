import React, { useState } from 'react';
import { Btn } from 'assets/commonStyle/styles';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';
import FileUpload from './FileUpload';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const Goods = [
  { key: 1, value: 'Goods1' },
  { key: 2, value: 'Goods2' },
  { key: 3, value: 'Goods3' },
];

function UploadProduct(props) {
  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [PriceValue, setPriceValue] = useState(0);
  const [GoodsValue, setGoodsValue] = useState(1);
  const [Images, setImages] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const onTitleChange = (e) => {
    setTitleValue(e.currentTarget.value);
  };
  const onDescriptionChange = (e) => {
    setDescriptionValue(e.currentTarget.value);
  };
  const onPriceChange = (e) => {
    setPriceValue(e.currentTarget.value);
  };
  const onGoodsSelectChange = (e) => {
    setGoodsValue(e.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !GoodsValue ||
      !Images
    ) {
      return alert('fill all the fields first!');
    }

    const variables = {
      writer: user._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      goods: GoodsValue,
    };

    Axios.post('/api/product/uploadProduct', variables).then((res) => {
      if (res.data.success) {
        alert('Product Successfully Uploaded');
        props.history.push('/');
      } else {
        alert('Failed to upload Product');
      }
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <GoodsNavbar />
      <div style={{ maxWidth: '1000px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 level={2}>Upload Product</h1>
        </div>

        <form onSubmit={onSubmit} className="row">
          {/* Drop zone */}
          <div className="col-4">
            <FileUpload refreshFunction={updateImages} />
          </div>
          <div className="col-8">
            <br />
            <br />
            <label>상품명</label>
            <input
              type="text"
              className="form-control"
              onChange={onTitleChange}
              value={TitleValue}
              style={{ width: '100%' }}
            />
            <br />
            <br />
            <label>설명</label>
            <br />
            <textarea
              className="form-control"
              onChange={onDescriptionChange}
              value={DescriptionValue}
              style={{ width: '100%' }}
            />
            <br />
            <br />
            <label>가격(원)</label>
            <br />
            <input
              onChange={onPriceChange}
              value={PriceValue}
              style={{ marginRight: '15px' }}
            />
            <select onChange={onGoodsSelectChange}>
              {Goods.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            <br />
            <br />
            <Btn onClick={onSubmit}>등록하기</Btn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadProduct;
