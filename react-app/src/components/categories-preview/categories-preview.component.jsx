import './categories-preview.styles.scss'
import { useNavigate } from 'react-router-dom'


export const CategoriesPreview = ({category}) => {
    const {title,imageURL} = category;
    const navigate = useNavigate()
    const onNavigateHandler = () => navigate(`/shop/${title.toLowerCase()}`)
    return (
        <div className="categories-preview_body">
            <div className="categories-preview_body_title" onClick={onNavigateHandler}>{title}</div>
            <div className="categories-preview_body_image" onClick={onNavigateHandler}><img src={imageURL} alt="" /></div>
        </div>
    )
}


export default CategoriesPreview;