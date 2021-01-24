import '../../styles/vg2.css'
import vg2 from './Pictures/img.jpg'

const Vert2 = ()=>
{
    return (
        <>
            <div className="vg2">
                <img src={vg2} className="vg2-img" alt=""/>
            <div className="vg2-text-container">
                <h3 className="vg2-text">
                    Title of vertical Gallery
                </h3>
                    <p className="vg2-category">Travel/ August 21 2017</p>
                </div>
            </div>
        </>
    )
}
export default Vert2