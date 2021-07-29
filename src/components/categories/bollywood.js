import '../../styles/categories.css'
import Catposts from "./catposts";
import Advert from "../Home/advertisement"
import Topposts from "../Home/topposts"


const Bolly = ()=>{
    return(
        <>
            <div className="head-container">
                <h2 className="head">Bollywood</h2>
                <hr className="head-hr"/>
            </div>
            <div className ="main-container">
                <div className="catpost-container">
                    {arr6.map((item)=>(<Catposts/>))}
                        <p className="load-more">	&#8595; </p><span className="load-more-span">  LOAD MORE</span>
                </div>
                <div className="right">
                <div className="head-container">
                    <h2 className="head">Top Posts</h2>
                    <hr className="head-hr"/>
                </div>
                        <Topposts/>
                        <Advert/>
                </div>
            </div>
            
            </>
        )
}
export default Bolly;