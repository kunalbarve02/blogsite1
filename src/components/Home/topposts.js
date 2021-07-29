import { Link } from 'react-router-dom'
import '../../styles/toppost.css'
import {useEffect,useState} from 'react';
import axios from 'axios'

const Toppost = ()=>{
    const [toppost,settoppost]=useState([])

    useEffect(() => {
        axios.get('https://blogsitebackend.herokuapp.com/get_toppost')
        .then((res)=>{
            settoppost(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return(
        <>
            <div className="topPost">
                {toppost.map((item,index)=>(
                    <>
                        {index===0?<Link to={`/The-Siren/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="topPost-main">
                            <img src={item.img} alt="" className="topPost-main-img"/>
                            <h3 className="topPost-main-head">{item.heading}</h3>
                            <p className="topPost-main-category">{item.category} /  {item.date}</p>
                        </div>
                    </Link>:
                    <Link to={`/The-Siren/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="topPost-sec">
                            <img src={item.img} alt="" className="topPost-sec-img"/>
                            <div className="topPost-sec-text-container"> 
                                <h4 className="topPost-sectext-head">{item.heading}</h4>
                                <p className="topPost-sec-category">
                                    {item.category} / {item.date}
                                </p>                                                       
                            </div>
                        </div>
                    </Link>
                    }
                    </>
                ))}
            </div>
        </>
    )
}
export default Toppost