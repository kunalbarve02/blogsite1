import '../../styles/Vertgallery.css'
import img1 from './Pictures/img.jpg'
import img2 from './Pictures/img2.jpg'

const Vertgallery = ()=>{
    return(
        <div className="container">
            <div className="primary-container">
                <img src={img1} alt="" className="primary-img"/>
                <div className="text-block-1">
                    <h3 className="img1-heading">Title of vertical gallery</h3>
                    <h5 className="img1-category">Travel / August 21 2017</h5>
                </div>
            </div>
            <div className="sec-parent">
                <div className="secondary-container">
                    <img src={img2}alt="" className="sec-img"/>
                    <div className="text-block-2"  id="txt1">
                        <h3 className="img1-heading">The Sound cloud</h3>
                        <h3 className="img1-heading">You loved is doomed</h3>
                        <h5 className="img1-category">Travel / August 21 2017</h5>
                    </div>
                </div>
                <div className="secondary-container" >
                    <img src={img2} alt="" className="sec-img"/>
                    <div className="text-block-2" id="txt2">
                        <h3 className="img1-heading">The Sound cloud</h3>
                        <h3 className="img1-heading">You loved is doomed</h3>
                        <h5 className="img1-category">Travel / August 21 2017</h5>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Vertgallery;