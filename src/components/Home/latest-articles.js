import { Link } from 'react-router-dom'
import '../../styles/latestarticles.css'

import {useEffect,useState} from 'react';
import axios from 'axios'


const Articles=()=>{
    const[latestArticles,setlatestArticles]=useState([])
    useEffect(()=>{
        axios.get('https://blogsitebackend.herokuapp.com/get_latestarticles')
        .then((res)=>{
            setlatestArticles(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return(
        <>
        {latestArticles.map((item)=>(
            <Link to={`/The-Siren/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} exact style={{ textDecoration: 'none', color:"black"}}>
                <div className="latest-article-container">
                    <img src={item.img} alt="" className="latest-article-img"/>
                    <div className="latest-article-text-container"> 
                        <h4 className="latest-article-text-head">{item.heading}</h4>
                        <p className="latest-article-text">
                            {item.desc}
                        </p>
                        <div className="latest-article-category-container">
                            <p className="latest-article-category">
                                {item.category}
                            </p>
                            <p className="latest-article-date">
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
export default Articles