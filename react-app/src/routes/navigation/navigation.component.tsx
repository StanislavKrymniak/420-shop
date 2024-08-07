import { Link, Outlet,useLocation } from 'react-router-dom';
import './navigation.styles.scss'
import cartIcon from '../../assets/cart-icon.svg'
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const currentUser = useSelector(selectCurrentUser) 
  const dispatch = useDispatch()
  const signOutHandler = () => dispatch(signOutStart())
  return (
      <div className="navigation_container">
        <div className={`navigation_body ${isHomePage ? 'home' : 'not-home'}`}>
          <div className="navigation_wrapper">
            <div className="navigation_links">
              <div className="navigation_shop"><Link to='/shop'>Каталог</Link></div>
              <div className="navigation_label"><Link to='/'>420</Link></div>
              <div className="navigation_cart"><Link to='/cart'><img src={cartIcon} alt="" /></Link></div>
            </div>
            {
              currentUser ? (
                <div className="navigation_link">
                  <div className="navigation_sign-out" onClick={signOutHandler}>Sign-Out</div>
                </div>
              ) : (
                <div className="navigation_link">
                  <div className="navigation_sign-in"><Link to='/sign-in'>Sign-In</Link></div>
                </div>
              )
            }
            
          </div>
        </div>
        <Outlet />
        <div className="navigation_footer"></div>
      </div>
  );
};

export default Navigation;
