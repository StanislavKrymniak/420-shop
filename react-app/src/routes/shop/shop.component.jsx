import React from 'react';
import Categories from '../../components/categories/categories.component';
import './shop.styles.scss'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.reducer';
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils'

export const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);
  return ( 
    <nav className='shop_container'>
      <h1>Shop Page</h1>
        <Categories />
    </nav>
  )
};

export default Shop;
