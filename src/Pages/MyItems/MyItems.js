import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useItems from '../../hooks/useItems';


const MyItems = () => {
    const [myItems, setMyItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(inventory => inventory._id !== id);
                    setMyItems(remaining);
                })

        }

    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center text-pink my-3'>My Items</h1>
            {
                myItems.map(myItem => <div key={myItem._id}

                >
                    <div className='container table-responsive'>
                        <Table className='table-responsive' striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>{myItem.inventory}</td>
                                    <td>{myItem.email}</td>
                                    <td>{myItem.price}</td>
                                    <td>{myItem.seller}</td>
                                    <td><p className='text-center mt-2'><Button onClick={() => handleDelete(myItem._id)} className='btn btn-danger'>Delete</Button></p></td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyItems;