import { Link } from 'react-router-dom'
import topPost from './Pictures/latest.jpg'
import topPost2 from './Pictures/latest-article.jpg'
import '../../styles/toppost.css'

const Toppost = ()=>{
    return(
        <>
            <div className="topPost">
                    <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="topPost-main">
                            <img src={topPost} alt="" className="topPost-main-img"/>
                            <h3 className="topPost-main-head">Catch waves with an adventure guide</h3>
                            <p className="topPost-main-category">Travel /  August 21 2017</p>
                        </div>
                    </Link>
                    <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="topPost-sec">
                            <img src={topPost2} alt="" className="topPost-sec-img"/>
                            <div className="topPost-sec-text-container"> 
                                <h4 className="topPost-sectext-head">Catch waves with an adventure guide</h4>
                                <p className="topPost-sec-category">
                                    Travel / August 21 2017
                                </p>                                                       
                            </div>
                        </div>
                    </Link>
                    <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="topPost-sec">
                            <img src={topPost2} alt="" className="topPost-sec-img"/>
                            <div className="topPost-sec-text-container"> 
                                <h4 className="topPost-sectext-head">Catch waves with an adventure guide</h4>
                                <p className="topPost-sec-category">
                                    Travel / August 21 2017
                                </p>                                                       
                            </div>
                        </div>
                    </Link>
                    <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="topPost-sec">
                            <img src={topPost2} alt="" className="topPost-sec-img"/>
                            <div className="topPost-sec-text-container"> 
                                <h4 className="topPost-sectext-head">Catch waves with an adventure guide</h4>
                                <p className="topPost-sec-category">
                                    Travel / August 21 2017
                                </p>                                                       
                            </div>
                        </div>
                    </Link>
                    <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="topPost-sec">
                            <img src={topPost2} alt="" className="topPost-sec-img"/>
                            <div className="topPost-sec-text-container"> 
                                <h4 className="topPost-sectext-head">Catch waves with an adventure guide</h4>
                                <p className="topPost-sec-category">
                                    Travel / August 21 2017
                                </p>                                                       
                            </div>
                        </div>
                    </Link>
                    <Link to="/article" exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="topPost-sec">
                            <img src={topPost2} alt="" className="topPost-sec-img"/>
                            <div className="topPost-sec-text-container"> 
                                <h4 className="topPost-sectext-head">Catch waves with an adventure guide</h4>
                                <p className="topPost-sec-category">
                                    Travel / August 21 2017
                                </p>                                                       
                            </div>
                        </div>
                    </Link>
            </div>
        </>
    )
}
export default Toppost