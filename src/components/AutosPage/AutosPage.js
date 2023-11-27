import React from 'react';
import CategoryRectangle from '../CategoryRectangle/CategoryRectangle'; // Make sure to import the CategoryRectangle component
import carImage from '../../assets/images/autocat.png'; // Update the path to your car image

function AutosPage() {
  return (
    <div>
      <CategoryRectangle image={carImage} />
      {}
    </div>
  );
}

export default AutosPage;
