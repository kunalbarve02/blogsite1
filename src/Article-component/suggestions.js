import { Link } from 'react-router-dom';
import axios from 'axios'
import {useEffect,useState} from 'react';
const Suggestions =()=>{
    const [suggestion,setSuggestion]=useState([])
    useEffect(()=>{
        axios.get('https://blogsitebackend.herokuapp.com/get_suggestions')
        .then((res)=>{
            console.log(res.data)
            setSuggestion(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return( 
    <>
        {suggestion.map((item)=>(
            <Link to={`/The-Siren/${item.category.toLowerCase()}/${item.id.toLowerCase()}`} exact style={{ textDecoration: 'none', color:"black"}}>
                <div className="suggestion-article">
                    <img src={item.img} alt="latest-article"/>
                    <div className="suggestion-head">
                        <h3>{item.heading}</h3>
                        <div className="footer-author" id="sugg">
                            <img src={item.author_img} alt="Author" className="auth-img"/>
                            <div className="auth-name-container">
                                <p className="auth-name">{item.author}</p>
                                <p className="date">{item.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </>
    )
}
export default Suggestions