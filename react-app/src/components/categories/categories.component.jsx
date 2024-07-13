import CategoriesPreview from "../categories-preview/categories-preview.component";
import './categories.styles.scss'



const  categories = [
    {
    id: 1,
    title: 'Hats',
    imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats'
    },
    {
    id: 2,
    title: 'Jackets',
    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets'
    },
    {
    id: 3,
    title: 'Sneakers',
    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers'
    },
    {
    id: 4,
    title: 'Women',
    imageURL: 'https://i.ibb.co/GCCy8t/womens.png',
    route: 'shop/women'
    },
    {
    id: 5,
    title: 'Men',
    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/men'
    }
]

export const Categories = () => {

    return (
        <div className="categories_container">
            {categories.map((category) => (
                <CategoriesPreview key={category.id} category = {category} />
            ))}
        </div>
    )
}

export default Categories;