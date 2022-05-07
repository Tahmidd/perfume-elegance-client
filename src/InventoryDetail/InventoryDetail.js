import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../hooks/useInventoryDetail'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 '>

            <div className='col-sm-12 col-md-6 col-lg-4'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={inventory.img} className="card-img-top w-75 ms-4 ps-4" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{inventory.name}</h2>
                        <p className="card-text"> Price: {inventory.price}</p>
                        <p className="card-text"> Description: {inventory.description}</p>
                        <p className="card-text"> Quantity: {inventory.quantity}</p>
                        <p className="card-text"> Seller: {inventory.seller}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;