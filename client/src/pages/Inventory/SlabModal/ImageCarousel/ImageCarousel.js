import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageCarousel = (props) => {
  return (
    <Carousel style={{ marginBottom: '15px' }}>
      {props.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className='d-block w-100'
            src={image}
            alt={'Slab Image ' + index}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
