import axios from 'axios'
import {useEffect,useState} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/navbar.css'
import logo from './Home/Pictures/logo.jpg'



const Navbar =()=>{
    const [navList,setnavList]=useState([])
    useEffect(()=>{
        axios.get('https://blogsitebackend.herokuapp.com/navbar')
        .then((response)=>{
            setnavList(response.data.list)
            console.log(navList)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    return(
        <div className="navbar">
        <div className="logo-container">
            <img src={logo} className="logo" alt=""/>
        </div>
        <header className="navbar-container">
            <ul className="navbar-list">
                {navList.map((item)=>(
                    <NavLink to={item.path} activeClassName="nav-active" exact><li className="navbar-tab">{item.name}</li></NavLink>
                ))}
            </ul>
        </header>
        </div>
    )
}

export default Navbar;