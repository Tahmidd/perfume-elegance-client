import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from '../hooks/useInventoryDetail';
import auth from '../firebase.init';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';


const InventoryDetail = () => {

    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const item = {
            email: user.email,
            inventory: inventory.name,
            inventoryId: inventoryId,
            description: inventory.description,
            seller: inventory.seller,
            quantity: inventory.quantity,
            price: inventory.price

        }
        axios.post('http://localhost:5000/item', item)
            .then(response => {
                const { data } = response;
                if (data.inserterId) {
                    toast('delivery on the way');
                    event.target.reset();
                }
            });




        const quantity = parseInt(event.target.quantity.value) - 1;



        const updatedUser = { quantity };

        // send data to the server
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('changed successfully please reload');

            })

    }

    return (
        <div className='d-flex justify-content-center align-items-center mt-5 '>

            <div className='w-50 mx-auto'>
                <h2 className='text-pink text-center my-2 pb-2'>Please Order: {inventory.name}</h2>
                <div className='d-flex justify-content-center'>
                    <img src={inventory.img} className='w-25 mb-2' alt="..." />
                </div>
                <form onSubmit={handlePlaceOrder} >

                    <br />
                    <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='email' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-2' type="text" value={inventory.name} name='name' placeholder='name' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-2' type="text" value={inventory.description} name='description' placeholder='description' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-2' type="text" name='seller' value={inventory.seller} placeholder='seller' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-2' type="text" name='quantity' value={inventory.quantity} placeholder='quantity' required readOnly disabled />
                    <br />
                    <input className='w-100 mb-2' type="text" name='price' value={inventory.price} placeholder='price' required readOnly disabled />
                    <br />



                    <input className='btn btn-pink text-white' type="submit" value="Deliver" />


                </form>



                <div className='d-flex justify-content-center'>
                    <Link to='/manage'><Button className='btn btn-pink border-0 my-5'>Manage Inventory</Button></Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default InventoryDetail;