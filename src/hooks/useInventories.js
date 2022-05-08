import { useEffect, useState } from "react";

const useInventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://morning-tundra-07720.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts]
}

export default useInventories;