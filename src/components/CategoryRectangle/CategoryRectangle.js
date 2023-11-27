import React from 'react';
import PropTypes from 'prop-types';

const CategoryRectangle = ({ category, image, onClick }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', margin: '10px', textAlign: 'center' }}>
      <img src={image} alt={category} style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '8px' }} />
      <h3>{category}</h3>
      <button onClick={onClick}>View {category} Items</button>
    </div>
  );
};

CategoryRectangle.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryRectangle;
