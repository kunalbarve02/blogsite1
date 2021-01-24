import { Link } from 'react-router-dom';
import '../../styles/catpost.css'
import pic from '../Home/Pictures/latest.jpg'

const Catposts = ()=>{
    return(
            <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                <div className="cat-posts">
                    <img src={pic} className="cat-posts-img" alt=""/>
                    
                    <div className="cat-posts-text-container"> 
                        <h4 className="cat-posts-text-head">Catch waves with an adventure guide</h4>
                        <p className="cat-posts-text">
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces
                        </p>
                        <p className="cat-posts-category">
                            Travel
                        </p>
                        <p className="cat-posts-date">
                            / August 21 2017
                        </p>
                    </div>
                </div>
            </Link>
        )
}
export default Catposts