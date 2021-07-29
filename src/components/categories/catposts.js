import { Link } from 'react-router-dom';
import '../../styles/catpost.css'

const Catposts = (props)=>{
    return(
            <Link to={`${props.categoryData.category.toLowerCase()}/${props.categoryData.id}`} exact style={{ textDecoration: 'none', color:"black"}}>
                <div className="cat-posts">
                    <img src={props.categoryData.img} className="cat-posts-img" alt={props.categoryData.heading+"image"}/>
                    
                    <div className="cat-posts-text-container"> 
                        <h4 className="cat-posts-text-head">{props.categoryData.heading}</h4>
                        <p className="cat-posts-text">
                            {props.categoryData.desc}
                        </p>
                        <p className="cat-posts-category">
                            {props.categoryData.category}
                        </p>
                        <p className="cat-posts-date">
                            / {props.categoryData.date}
                        </p>
                    </div>
                </div>
            </Link>
        )
}
export default Catposts