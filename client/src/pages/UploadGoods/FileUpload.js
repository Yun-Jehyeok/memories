import { Icon } from 'antd';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import { Drop, ImageZone } from './styles';

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
          <Drop {...getRootProps()}>
            <input {...getInputProps()} />
            <Icon type="plus" style={{ fontSize: '3rem' }} />
          </Drop>
        )}
      </Dropzone>
      <ImageZone>
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)} key={index}>
            <img
              src={`http://localhost:7000/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </ImageZone>
    </div>
  );
}

export default FileUpload;
