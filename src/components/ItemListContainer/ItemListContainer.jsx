import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import AutosPage from '../AutosPage/AutosPage';
import MotosPage from '../MotosPage/MotosPage';

const ItemListContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleViewItemsClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {selectedCategory ? (
        <ItemList category={selectedCategory} />
      ) : (
        <div>
          <AutosPage onViewItemsClick={() => handleViewItemsClick('cars')} />
          <MotosPage onViewItemsClick={() => handleViewItemsClick('motorbikes')} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
