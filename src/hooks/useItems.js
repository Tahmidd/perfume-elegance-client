import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/item?email=${email}`)
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, []);
    return [myItems, setMyItems]
}

export default useItems;