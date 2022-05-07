import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../hooks/useInventories'

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-3 text-pink'>Manage Inventory</h1>
            <div className='d-flex justify-content-center my-5 border container rounded'>
                <Link to='/add'><Button className='btn btn-pink border-0 my-5'>Add Inventory</Button></Link>
            </div>
            {
                inventories.map(inventory => <div key={inventory._id}>
                    <div className='container'>
                        <Table className='' striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Seller</th>
                                    <th>Button</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{inventory.name}</td>
                                    <td>{inventory.price}</td>
                                    <td>{inventory.seller}</td>
                                    <td><p className='text-center mt-2'><Button className='btn btn-danger'>Delete</Button></p></td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageInventories;