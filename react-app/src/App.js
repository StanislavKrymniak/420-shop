import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Category from './routes/category/category.component';
import CategoryItem from './routes/category-item/category-item.component';
import { CartComponent } from './components/cart/cart.component';
import store from './store/store'
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='shop/:category' element={<Category />} />
          <Route path='shop/:category/:productId' element={<CategoryItem />} />
          <Route path='/cart' element={<CartComponent />}/>
      </Route>
    </Routes>
    </Provider>
  );
}

export default App;
