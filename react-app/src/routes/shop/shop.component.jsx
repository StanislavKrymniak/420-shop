import React from 'react';
import Categories from '../../components/categories/categories.component';
import './shop.styles.scss'


export const Shop = () => {
  return ( 
    <nav className='shop_container'>
      <h1>Shop Page</h1>
      <Categories />
    </nav>
  )
};

export default Shop;
