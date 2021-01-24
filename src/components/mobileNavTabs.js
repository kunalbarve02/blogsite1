import { NavLink } from 'react-router-dom'
import '../styles/mobTabs.css'

const navList=[
    {
        name: 'Home',
        path:'/home',
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

const MobTabs =()=>{
    return (
        <>
            <ul className="tab-list">
            {navList.map((item)=>(
                    <NavLink to={item.path} activeClassName="tab-nav-active" exact><li className="tab">{item.name}</li></NavLink>
            ))}
            </ul>
        </>
        )
}
export default MobTabs