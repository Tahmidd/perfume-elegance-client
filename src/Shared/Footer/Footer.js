import { faFacebook, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-btm'>
            <footer className='text-center mt-5 bg-pink h-100 ' >
                <h3 className='pt-3'>All Time at Your Service <span className='text-white'>Perfume Elegance</span></h3>
                <p><small>copyright <FontAwesomeIcon className='text-white' icon={faCopyright} /> {year} </small></p>
                <p className='text-white  '>Feel Free to Contact anytime</p>
                <div className='d-flex justify-content-center'>
                    <p> <FontAwesomeIcon className='text-white me-3' icon={faFacebook} /> </p>
                    <p> <FontAwesomeIcon className='text-white me-3' icon={faGoogle} /> </p>
                    <p> <FontAwesomeIcon className='text-white' icon={faYoutube} /> </p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;