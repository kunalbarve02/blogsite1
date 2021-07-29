import './artnav.css'

import {useParams} from "react-router-dom";
import axios from 'axios'
import {useEffect,useState} from 'react';

import clapImg from './rythm.svg'
import shareImg from "./share.svg"
import ArticleNav from './articleNav'
import Suggestions from './suggestions'

const Article=()=>{
    var {category,id}=useParams()
    console.log(id)
    let [article,setarticle]=useState({})
    useEffect(()=>{
        axios.get('https://blogsitebackend.herokuapp.com/get_article',{
            params: {
                category:category,
                id:id
            }
        })
        .then((res)=>{
            console.log(res.data)
            setarticle(res.data)
            console.log(article)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <>
            <ArticleNav/>
            <div className="article-container">
                <div className="clap-share">
                    <button className="clap-btn"><img src={clapImg} alt="className" class="clap-icon"/></button>
                    <p className="clap-count">{article.claps} claps</p>
                    <br/>
                    <button className="clap-btn"><img src={shareImg} alt="share" className="clap-icon"/></button>
                    <p className="clap-count">share</p>
                </div>
                <div className="article">
                    <h2 className="article-heading">{article.heading}</h2>
                    <div className="article-info">
                        <div className="author-info">
                            <img src={article.author_img} alt="Author" className="auth-img"/>
                            <div className="auth-name-container">
                                <p className="auth-name">{article.author}</p>
                                <p className="date">{article.posted_on}</p>
                            </div>
                        </div>
                        <div className="share">
                            <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                            <a href="https://twitter.com/" class="fa fa-twitter"></a>
                            <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                            <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
                        </div>
                    </div>
                    <img src={article.img} className="article-img"/>
                    <p className="article-content">
                        {article.content}
                    </p>
                    <div className="article-footer">
                        <ul className="tag-list">
                            <li className="tag">React</li>
                            <li className="tag">JavaScript</li>
                            <li className="tag">Animation</li>
                        </ul>
                        <div className="clap">
                            <button className="clap-btn"><img src={clapImg} alt="clap" className="clap-icon"/></button>
                            <p className="clap-count"> {article.claps} claps</p>
                        </div>
                        <div className="footer-author">
                            <img src={article.author_img} alt="Author" className="auth-img"/>
                            <div class="auth-name-container">
                                <p className="date">WRITTEN BY</p>
                                <p className="auth-name">{article.auth}</p>
                                <p className="date">{article.posted_on}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="suggestion-container">
            <h3 class="sugg-text">More from The Siren</h3>
            <div class="suggestion-article-container">
                <Suggestions/>
            </div>
        </div>
        </>
    )
}
export default Article