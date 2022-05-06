import React from 'react';
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
            <Faq></Faq>

        </div>
    );
};

export default Home;