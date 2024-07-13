import React from 'react';
import { Link, Outlet,useLocation } from 'react-router-dom';
import './navigation.styles.scss'
import cartIcon from '../../assets/cart-icon.svg'

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
      <div className="navigation_container">
        <div className={`navigation_body ${isHomePage ? 'home' : 'not-home'}`}>
          <div className="navigation_links">
            <div className="navigation_shop"><Link to='/shop'>Каталог</Link></div>
            <div className="navigation_label"><Link to='/'>420</Link></div>
            <div className="naviagation_cart"><Link to='/cart'><img src={cartIcon} alt="" /></Link></div>
          </div>
        </div>
        <Outlet />
        <div className="navigation_footer"></div>
      </div>
  );
};

export default Navigation;
