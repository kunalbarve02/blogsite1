import {NavLink} from 'react-router-dom';
import '../styles/navbar.css'
import logo from './Home/Pictures/logo.jpg'

 const navList=[
    {
        name: 'Home',
        path:'/The-Siren',
    },
    {
        name: 'Bollywood',
        path:'/bollywood',
    },
    {
        name: 'Hollywood',
        path:'/hollywood',
    },
    {
        name: 'Technology',
        path:'/technology',
    },
    {
        name: 'Fitness',
        path:'/fitness',
    },
    {
        name: 'Food',
        path:'/food',
    }
 ]

const Navbar =()=>{
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