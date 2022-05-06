import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="inventory" className='container pt-3'>
            <h1 className='text-center text-pink'>Our Products</h1>
            <div className='row'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    >

                    </Product>)
                }
            </div>

        </div>
    );
};

export default Products;