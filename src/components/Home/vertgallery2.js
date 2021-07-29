import '../../styles/vg2.css'

import axios from 'axios'
import {useEffect,useState} from 'react';

const Vert2 = ()=>
{
    const [vertgall,setvertgall]=useState([])
    useEffect(()=>{
        axios.get('https://blogsitebackend.herokuapp.com/get_verticalgallery')
        .then((res)=>{
            setvertgall(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <>
            {vertgall.map((item)=>(
                <div className="vg2">
                    <img src={item.img} className="vg2-img" alt=""/>
                    <div className="vg2-text-container">
                        <h3 className="vg2-text">
                            {item.heading}
                        </h3>
                        <p className="vg2-category">{item.category}/ {item.date}</p>
                    </div>
                </div>
            ))}
            
        </>
    )
}
export default Vert2