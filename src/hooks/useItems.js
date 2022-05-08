import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://morning-tundra-07720.herokuapp.com/item?email=${email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, []);
    return [myItems, setMyItems]
}

export default useItems;