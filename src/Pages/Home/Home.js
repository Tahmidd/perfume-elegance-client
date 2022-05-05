import React from 'react';
import Banner from '../Homes/Banner/Banner';
import Faq from '../Homes/Faq/Faq';
import Overview from '../Homes/Overview/Overview';

const Home = () => {
    return (
        <div className='  '>
            <Banner></Banner>
            <Overview></Overview>
            <Faq></Faq>
        </div>
    );
};

export default Home;