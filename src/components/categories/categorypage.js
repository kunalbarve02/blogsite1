import {useParams} from "react-router-dom";
import axios from 'axios'
import {useEffect,useState} from 'react';

import '../../styles/categories.css'
import Catposts from "./catposts";
import Advert from "../Home/advertisement"
import Topposts from "../Home/topposts"



const Categorypage =()=>{
    let {category}=useParams()
    const [articleList,setArticleList]=useState([])
    useEffect(()=>{
        axios.get(`https://blogsitebackend.herokuapp.com/get_category_posts`,{
                params: {
                    category:category
                }
        })
        .then((res)=>{
            console.log(res.data)
            setArticleList(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[category])
    category = category.charAt(0).toUpperCase() + category.slice(1);
    return(
        <>
        <div className="head-container">
            <h2 className="head">{category}</h2>
            <hr className="head-hr"/>
        </div>
        <div className ="main-container">
            <div className="catpost-container">
            {articleList.map((item)=>(<Catposts categoryData={item}/>))}
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
export default Categorypage