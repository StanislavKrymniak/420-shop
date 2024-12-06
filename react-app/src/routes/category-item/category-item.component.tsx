import { useParams } from 'react-router-dom';
import './category-item.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { ChangeEvent, useState } from 'react';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCategoriesMap } from "../../store/categories/categories.selector"
import { CategoryRouteParams } from '../category/category.component';

const CategoryItem = () => {
  const { category, productId } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;;
  const SHOP_DATA = useSelector(selectCategoriesMap)
  const categoryData = SHOP_DATA[category.toLowerCase()];
  const product = categoryData?.find((item) => item.id === parseInt(productId));
  const cartItems = useSelector(selectCartItems)
  const [selectedSize, setSelectedSize] = useState('XS')
  const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };
  const dispatch = useDispatch()
  const addProductToCart = () => {
    if (product) {
      const sizeToPass = category.toLowerCase() === 'hats' ? undefined : selectedSize;
      dispatch(addItemToCart(cartItems, product, sizeToPass));
    }
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='category-item_container'>
      <div className="category-item_columns">
        <div className="category-item_column_1">
          <h2 className='category-item_title'>{product.name}</h2>
          <div className="category-item_image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className='category-item_text'>Price: ${product.price}</div>
        </div>
        <div className="category-item_cloumn_2">
          {category.toLowerCase() !== 'hats' && (
            <>
              <h2 className="category-item_choose">Size:</h2>
              <select id="size" name="size" value={selectedSize} onChange={handleSizeChange}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </>
          )}
          <button className="category-item_button" onClick={addProductToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;



