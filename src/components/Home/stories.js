import '../../styles/stories.css'

import {useEffect,useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Stories = ()=>{
    const [stories,setstories]=useState([])
    useEffect(()=>{
        axios.get('https://blogsitebackend.herokuapp.com/get_stories')
        .then((res)=>{
            setstories(res.data)
        })
    },[])
    return(
        <>
            {stories.map((item)=>(
                <Link to={`/The-Siren/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} exact style={{ textDecoration: 'none', color:"black"}}>
                    <div className="stories">
                        <div className="stories-text-container">
                            <h3 className="stories-head">{item.heading}</h3>
                            <p className="stories-text">{item.desc}</p>
                            <p className="stories-category">{item.category} / {item.date}</p>
                        </div>
                    </div>
                </Link>
            ))}
            
        </>
        )
}
export default Stories