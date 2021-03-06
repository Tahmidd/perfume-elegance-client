import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Homes/Banner/Banner';
import Faq from '../Homes/Faq/Faq';
import Overview from '../Homes/Overview/Overview';
import Products from '../Homes/Products/Products';


const Home = () => {
    return (
        <div className='  '>
            <Banner></Banner>
            <Overview></Overview>
            <Products></Products>
            <div className='d-flex justify-content-center my-5 border container rounded'>
                <Link to='/manage'><Button className='btn btn-pink border-0 my-5'>Manage Inventory</Button></Link>
            </div>
            <Faq></Faq>

        </div>
    );
};

export default Home;