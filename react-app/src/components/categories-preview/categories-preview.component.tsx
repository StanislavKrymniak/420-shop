import { CategoriesType } from '../categories/categories.component';
import './categories-preview.styles.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';

type CategoriesProps = {
    category: CategoriesType;
};

export const CategoriesPreview: FC<CategoriesProps> = ({ category }) => {
    const { title, imageURL } = category;
    
    return (
        <li className="categories-preview_body">
            <Link 
                to={`/shop/${title.toLowerCase()}`} 
                className="categories-preview_link"
                aria-label={`Przejdź do kategorii ${title}`}
            >
                <div className="categories-preview_body_title">{title}</div>
                <div className="categories-preview_body_image">
                    <img src={imageURL} alt={title} />
                </div>
            </Link>
        </li>
    );
};

export default CategoriesPreview;;