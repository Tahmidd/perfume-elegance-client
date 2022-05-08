import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../../hooks/useItems'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [myitems, setMyItems] = useItems();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/item?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getOrders();

    }, [user])
    return (
        <div>
            <h1>Items: {items.length}</h1>
            <h1>{items._id}</h1>

        </div>
    );
};

export default MyItems;