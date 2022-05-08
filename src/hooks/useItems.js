import { useEffect, useState } from "react";

const useItems = () => {
    const [myitems, setMyItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, [])
    return [myitems, setMyItems]
}

export default useItems;