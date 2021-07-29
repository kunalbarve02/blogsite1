import '../../styles/home.css'
import Vertgallery from "./VericalGallery";
import Latest from "./Latest";
import Articles from "./latest-articles"
import Vert2 from './vertgallery2';
import Advert from "./advertisement";
import Toppost from "./topposts";
import Stories from './stories';

const Home =(props)=>{
    return (
        <div className="master-conteiner">
            <Vertgallery/>
            <div className="latest-head-container">
                <h2 className="latest-head">The Latest</h2>
                <hr className="latest-hr"/>
            </div>
            <div className="latest">
                <Latest/>
            </div>
            <div className="lr-container">
                <div className="left">
                    <div className="latest-head-container">
                        <h2 className="latest-head">Latest Articles</h2>
                        <hr className="latest-hr"/>
                    </div>
                    <div className="latest-articles">
                     <Articles/>
                        <div className="load-more-container">
                            <p className="load-more"> &#8595; </p><p className="load-more-text">LOAD MORE</p>
                        </div>
                        <Vert2/>
                    </div>
                </div>
                <div className="right">
                    <Advert/>
                    <div className="latest-head-container">
                        <h2 className="latest-head">Top Posts</h2>
                        <hr className="latest-hr"/>
                    </div>
                    <Toppost/>
                </div>
            </div>
            <div className="latest-head-container">
                <h2 className="latest-head">Latest Stories</h2>
                <hr className="latest-hr"/>
            </div>
            <div className="stories-container">
            <Stories/>
            </div>
        </div>
    )
}
export default Home;