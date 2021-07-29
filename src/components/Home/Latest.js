import { Link } from 'react-router-dom'
import '../../styles/latest.css'


import {useEffect,useState} from 'react';
import axios from 'axios'

const Latest= ()=>{
    const[latest,setlatest]=useState([])
    useEffect(()=>{
        axios.get('https://blogsitebackend.herokuapp.com/get_thelatest')
        .then((res)=>{
            setlatest(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return(
        <>
            {latest.map((item)=>(
                <Link to={`/The-Siren/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} exact style={{ textDecoration: 'none', color:"black"}}>
                    <div className="latest-container">
                        <img src={item.img} alt="" className="latest-img"/>
                        <div className="latest-text-container">
                            <h4 className="latest-text-head">{item.heading}</h4>
                            <p className="latest-text">
                                {item.desc}
                            </p>
                            <div className="latest-category-container">
                                <p className="latest-category">
                                    {item.category}
                                </p>
                                <p className="latest-date">
                                    / {item.date}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}
export default Latest