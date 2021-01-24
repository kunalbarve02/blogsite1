import { Link } from 'react-router-dom'
import '../../styles/latest.css'
import latestImage from './Pictures/latest.jpg'

const Latest= ()=>{
    return(
        <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                <div className="latest-container">
                    <img src={latestImage} alt="" className="latest-img"/>
                    <div className="latest-text-container">
                        <h4 className="latest-text-head">Joshua Tree Overnight Adventure</h4>
                        <p className="latest-text">
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces
                        </p>
                        <div className="latest-category-container">
                            <p className="latest-category">
                                Travel
                            </p>
                            <p className="latest-date">
                                / August 21 2017
                            </p>
                        </div>
                    </div>
                </div>
        </Link>
    )
}
export default Latest