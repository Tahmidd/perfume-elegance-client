import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { id, name, img, price, description, seller, quantity } = product;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top w-75 ms-4 ps-4" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text"> Price: {price}</p>
                    <p className="card-text"> Description: {description}</p>
                    <p className="card-text"> Quantity: {quantity}</p>
                    <p className="card-text"> Seller: {seller}</p>

                    <button onClick={() => navigateToServiceDetail(id)} className='btn btn-pink text-white'>Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;