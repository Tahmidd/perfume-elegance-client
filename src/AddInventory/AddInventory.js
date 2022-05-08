import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';

const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        toast("successfully added");
        console.log(data);
        const url = `https://morning-tundra-07720.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-3 text-pink'>Please add a service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='Seller'  {...register("seller", { required: true, maxLength: 20 })} />
                <textarea className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Image Url' type="text" {...register("img")} />
                <input className='mb-3 bg-pink text-white border-0 rounded' value="Add Service" type="submit" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddInventory;