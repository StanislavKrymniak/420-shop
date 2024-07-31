import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Category from './routes/category/category.component';
import CategoryItem from './routes/category-item/category-item.component';
import PaymentForm from './components/payment-form/payment-form.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthComponent } from './routes/authentication/authentication.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener,createUserDocumentFromAuth} from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.reducer';
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(setCurrentUser(user))
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='shop/:category' element={<Category />} />
          <Route path='shop/:category/:productId' element={<CategoryItem />} />
          <Route path='/cart' element={<CartComponent />}/>
          <Route path='/sign-in' element={<AuthComponent />} />
          <Route path='/payment' element={<PaymentForm />} />
      </Route>
    </Routes>
  );
}

export default App;


