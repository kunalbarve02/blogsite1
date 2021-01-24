import { Link } from 'react-router-dom';
import suggImg from '../components/Home/Pictures/latest-article.jpg'
import authorImg from './Mask Group 21.png'

const Suggestions =()=>{
    return( 
        <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
            <div className="suggestion-article">
                    <p className="date">Also tagged in ReactJs</p>
                    <img src={suggImg} alt="latest-article"/>
                    <div className="suggestion-head">
                        <h3>Joshua Tree Overnight Adventure</h3>
                        <div className="footer-author" id="sugg">
                            <img src={authorImg} alt="Author" className="auth-img"/>
                            <div className="auth-name-container">
                                <p className="auth-name">Dmitry Nozhenko</p>
                                <p className="date">Jan 28, 2019 · 10 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Link>
    )
}
export default Suggestions