import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='w-75 container mt-3'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner2}
                        alt="Second slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={banner3}
                        alt="Third slide"
                    />

                </Carousel.Item>



            </Carousel>
        </div>
    );
};

export default Banner;