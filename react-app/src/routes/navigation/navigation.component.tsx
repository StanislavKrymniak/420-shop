import { Link, Outlet, useLocation } from 'react-router-dom';
import './navigation.styles.scss';
import cartIcon from '../../assets/cart-icon.svg';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const signOutHandler = () => dispatch(signOutStart());

  return (
    <header className="navigation_container">
      <div className={`navigation_body ${isHomePage ? 'home' : 'not-home'}`}>
        <div className="navigation_wrapper">
          
          <nav className="navigation_links" aria-label="Główna nawigacja">
            <div className="navigation_shop">
              <Link to='/shop'>Katalog</Link>
            </div>
            <div className="navigation_label">
              <Link to='/'>420</Link>
            </div>
            <div className="navigation_cart">
              <Link to='/cart' aria-label="Zobacz koszyk">
                <img src={cartIcon} alt="Ikona koszyka" />
              </Link>
            </div>
          </nav>

          <nav className="navigation_link" aria-label="Nawigacja użytkownika">
            {currentUser ? (

              <div 
                className="navigation_sign-out" 
                onClick={signOutHandler}
              >
                <Link to='/'>Sign-Out</Link>
              </div>
            ) : (
              <div className="navigation_sign-in">
                <Link to='/sign-in'>Sign-In</Link>
              </div>
            )}
          </nav>
        </div>
      </div>
      <Outlet />
    </header>
  );
};

export default Navigation;
