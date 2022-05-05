import React from 'react';
import perfumee from '../../../images/essential-oils-g9df2f2f9c_1920.jpg';
import './Overview.css'

const Overview = () => {
    return (
        <div>
            <div className="container my-3 py-3 w-75">
                <div className="row gy-5 d-flex align-items-center">
                    <div className="col-12 col-md-12 col-lg-6">
                        <h1> <span>Welcome to the Elegance</span> <br /></h1>
                        <h1> <span className='text-pink'>Of Perfume</span> <br /></h1>
                        <p>Welcome to the world of fragrance where
                            <br /> the sweet fragrance can take you to another dimension.
                        </p>


                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <img className='img-fluid' src={perfumee} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;