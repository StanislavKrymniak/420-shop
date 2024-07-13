import { useParams } from "react-router-dom"
import SHOP_DATA from "../../shop-data"
import './category.styles.scss'
import { Link } from "react-router-dom"



export const Category = () => {
    const {category} = useParams();
    const clothes = SHOP_DATA[category.toLowerCase()] || null;
    if (!clothes) {
        return <div>Category not found</div>;
      }  
    return (
        <div className="category_container">
            <h2 className="category_title">{category.toUpperCase()}</h2>
            <div className="category_items">
                {clothes.items.map((item) => (
                    <div key={item.id} className="category_item">
                        <Link className="category-image" to={`/shop/${category}/${item.id}`}>
                            <img src={item.imageUrl} alt={item.name} />
                        </Link>
                        <div className="category_text">
                            <div className="category_text name">{item.name}</div>
                            <div className="category_text price">{item.price}$</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Category