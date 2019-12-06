import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = (props) => {
  const path = '/assets/images/';
  const imgArr = props.images.split(',');
  console.log(imgArr);
  return (
    <Carousel style={{ marginBottom: '15px' }} interval={null}>
      {imgArr.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className='d-block w-100'
            src={path + image}
            alt={'Slab Image ' + index}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
