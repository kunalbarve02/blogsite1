import { NavLink } from 'react-router-dom'
import '../styles/mobTabs.css'

const navList=[
    {
        name: 'Home',
        path:'/',
    },
    {
        name: 'Bollywood',
        path:'/The-Siren/bollywood',
    },
    {
        name: 'Hollywood',
        path:'/The-Siren/hollywood',
    },
    {
        name: 'Technology',
        path:'/The-Siren/technology',
    },
    {
        name: 'Fitness',
        path:'/The-Siren/fitness',
    },
    {
        name: 'Food',
        path:'/The-Siren/food',
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