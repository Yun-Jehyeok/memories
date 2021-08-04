import { Icon } from 'antd';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

function FileUpload(props) {
  const [Images, setImages] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();

    formData.append('file', files[0]);

    // save the image we chose inside the node server
    Axios.post('/api/product/uploadImage', formData).then((res) => {
      if (res.data.success) {
        setImages([...Images, res.data.image]);
        props.refreshFunction([...Images, res.data.image]);
      } else {
        alert('Failed to save the Image in Server');
      }
    });
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '300px',
              height: '240px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Icon type="plus" style={{ fontSize: '3rem' }} />
          </div>
        )}
      </Dropzone>
      <div
        style={{
          display: 'flex',
          width: '300px',
          height: '240px',
          overflowX: 'scroll',
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)} key={index}>
            <img
              style={{ minWidth: '300px', width: '300px', height: '240px' }}
              src={`http://localhost:7000/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
