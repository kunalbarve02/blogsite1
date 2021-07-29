import '../../styles/Vertgallery.css'

import axios from 'axios'
import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const Vertgallery = ()=>{
    const [vertgallery1,setvertgallery1]=useState([])
    const [vertgallery2,setvertgallery2]=useState([])
    useEffect(()=>{
        axios.get('https://blogsitebackend.herokuapp.com/get_verticalgallery1')
        .then((res)=>{
            setvertgallery1(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
        axios.get('https://blogsitebackend.herokuapp.com/get_verticalgallery2')
        .then((res)=>{
            setvertgallery2(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
    },[])
    return(
        <div className="container">
            {vertgallery1.map((item)=>(
                <Link to={`/The-Siren/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} exact style={{ textDecoration: 'none', color:"black"}}>
                    <div className="primary-container">
                        <img src={item.img} alt="" className="primary-img"/>
                        <div className="text-block-1">
                            <h3 className="img1-heading">{item.heading}</h3>
                            <h5 className="img1-category">{item.category} / {item.posted_on}</h5>
                        </div>
                    </div>
                </Link>
            ))}
            <div className="sec-parent">
                {console.log(vertgallery2)}
                {vertgallery2.map((item,index)=>(
                    <Link to={`/The-Siren/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} exact style={{ textDecoration: 'none', color:"black"}}>
                        <div className="secondary-container" >
                            <img src={item.img} alt="" className="sec-img"/>
                            <div className="text-block-2" id={`txt${index+1}`}>
                                <h3 className="img1-heading">{item.heading}</h3>
                                <h5 className="img1-category">{item.category} / {item.posted_on}</h5>
                            </div>
                        </div>
                    </Link>
                ))}                
                </div>  
        </div>
    )
}
export default Vertgallery;