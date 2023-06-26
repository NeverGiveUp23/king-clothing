import CategoryItems from "../category-items/category-items";
import './categories.style.scss'

const DirectoryItemMenu = ({ categories }) => {
 return (
     <div className={"categories-container "}>
         {categories.map((category) => (
             <CategoryItems key={category.id} category={category}/>
         ))}
     </div>
 )
}


export default DirectoryItemMenu;

