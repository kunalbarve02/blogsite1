import './artnav.css'

import clapImg from './rythm.svg'
import shareImg from "./share.svg"
import authorImg from './Mask Group 21.png'
import articleImg from './Screenshot 2020-08-10 at 4.28.04 PM.png'
import articleImgII from './Screenshot 2020-08-10 at 4.31.07 PM.png' 
import ArticleNav from './articleNav'
import Suggestions from './suggestions'

const Article=()=>{
    return (
        <>
            <ArticleNav/>
            <div className="article-container">
                <div className="clap-share">
                    <button className="clap-btn"><img src={clapImg} alt="className" class="clap-icon"/></button>
                    <p className="clap-count">9.3K claps</p>
                    <br/>
                    <button className="clap-btn"><img src={shareImg} alt="share" className="clap-icon"/></button>
                    <p className="clap-count">share</p>
                </div>
                <div className="article">
                    <h2 className="article-heading">5 Ways to animate a React app</h2>
                    <div className="article-info">
                        <div className="author-info">
                            <img src={authorImg} alt="Author" className="auth-img"/>
                            <div className="auth-name-container">
                                <p className="auth-name">Dmitry Nozhenko</p>
                                <p className="date">Jan 28, 2019 · 10 min read</p>
                            </div>
                        </div>
                        <div className="share">
                            <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                            <a href="https://twitter.com/" class="fa fa-twitter"></a>
                            <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                            <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
                        </div>
                    </div>
                    <img src={articleImg} className="article-img"/>
                    <p className="article-content">
                        Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. 
                    
                        Let’s talk about them
                    </p>
                    <img src={articleImgII} alt="img" className="content-image"/>
                    <div className="article-footer">
                        <ul className="tag-list">
                            <li className="tag">React</li>
                            <li className="tag">JavaScript</li>
                            <li className="tag">Animation</li>
                        </ul>
                        <div className="clap">
                            <button className="clap-btn"><img src={clapImg} alt="clap" className="clap-icon"/></button>
                            <p className="clap-count">9.3K claps</p>
                        </div>
                        <div className="footer-author">
                            <img src={authorImg} alt="Author" className="auth-img"/>
                            <div class="auth-name-container">
                                <p className="date">WRITTEN BY</p>
                                <p className="auth-name">Dmitry Nozhenko</p>
                                <p className="date">Jan 28, 2019 · 10 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="suggestion-container">
            <h3 class="sugg-text">More from The Siren</h3>
            <div class="suggestion-article-container">
                <Suggestions/>
                <Suggestions/>
                <Suggestions/>
            </div>
        </div>
        </>
    )
}
export default Article