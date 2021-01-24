import { Link } from 'react-router-dom'
import '../../styles/latestarticles.css'
import latestArticlesImg from './Pictures/latest-article.jpg'


const Articles=()=>{
    return(
        <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                <div className="latest-article-container">
                    <img src={latestArticlesImg} alt="" className="latest-article-img"/>
                    <div className="latest-article-text-container"> 
                        <h4 className="latest-article-text-head">Catch waves with an adventure guide</h4>
                        <p className="latest-article-text">
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces
                        </p>
                        <div className="latest-article-category-container">
                            <p className="latest-article-category">
                                Travel
                            </p>
                            <p className="latest-article-date">
                                / August 21 2017
                            </p>
                        </div>
                    </div>
                    
                </div>
        </Link>
    )
}
export default Articles