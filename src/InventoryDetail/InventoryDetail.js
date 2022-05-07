import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../hooks/useInventoryDetail'

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);
    return (
        <div>
            <h2>You are about to order: {inventory.name}</h2>
        </div>
    );
};

export default InventoryDetail;