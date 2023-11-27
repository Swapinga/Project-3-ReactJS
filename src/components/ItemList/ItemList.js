// ItemList.js
import React, { useState, useEffect } from 'react';
import itemsData from '../../data/itemsData';

const ItemList = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchedItems = itemsData[category] || [];
    setItems(fetchedItems);
  }, [category]);

  return (
    <div>
      <h2>{category} Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
