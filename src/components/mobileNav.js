import MobTabs from './mobileNavTabs'
import '../styles/mob-nav.css'
import {useState} from 'react'

const MobNav =()=>{

    const [tabVisibility , setTabVisibility]=useState(false)

    return(
        <>
        <div className="mobnav-container">
            <div className="mobnav-logo-container">
                <h2 className="mobnav-logo-the">The</h2>
                <h1 className="mobnav-logo-siren">Siren</h1>
            </div>
            <div className="mobnav-nav-logo" onClick={()=>{setTabVisibility(!tabVisibility)}}>
                <div className="mobnav-nav">

                </div>
                <div className="mobnav-nav">

                </div>
                <div className="mobnav-nav">
                    
                </div>
            </div>
        </div>
        {tabVisibility?<MobTabs/>:null}
        </>
        )
}
export default MobNav;