import React from 'react';
import Categories from '../../components/categories/categories.component';
import './shop.styles.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/categories.action';


export const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesStart())
  },[dispatch])
  return ( 
    <nav className='shop_container'>
      <h1>Shop Page</h1>
        <Categories />
    </nav>
  )
};

export default Shop;
