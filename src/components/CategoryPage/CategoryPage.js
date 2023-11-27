import React from 'react';
import { Outlet } from 'react-router-dom';

const CategoryPage = ({ category }) => {
  return (
    <div>
      <h2>{category} Category Page</h2>
      {}
      <Outlet />
    </div>
  );
}

export default CategoryPage;
