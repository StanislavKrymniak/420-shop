import { useParams } from "react-router-dom"
import './category.styles.scss'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selector"



export const Category = () => {
    const {category} = useParams();
    const SHOP_DATA = useSelector(selectCategoriesMap)
    const clothes = SHOP_DATA[category.toLowerCase()] || null
    console.log(clothes)
    if (!clothes) {
        return <div>Category not found</div>;
      }  
    return (
        <div className="category_container">
            <h2 className="category_title">{category.toUpperCase()}</h2>
            <div className="category_items">
                {clothes.map((item) => (
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

