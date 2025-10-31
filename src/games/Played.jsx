import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import SportCard from '../components/SportCard'
import Loader from '../components/Loader'

const Played = () => {

    const [sportd, setSportd] = useState([]);

    const handleData =async () =>{
        try {
            const response = await axios("http://localhost:5000/sport/getsport" ,{})
            setSportd(response.data.sport);
        } catch (error) {
            console.log(error.message);
            
        }
    }

    useEffect(()=>{
        handleData()
        
    },[])
    
    return (
        sportd && sportd.length > 0 ? (
        <div className='my-10'>

            <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3  gap-5 justify-center px-4 md:px-20'>
             {
             sportd.map((item) =>(
                <Link to={item.title?.toLowerCase().replace(/\s+/g, '-')} key={item._id}>
                     <SportCard image={item.image} title={item.title} />
                </Link>
             ))}

            </div>

        </div>
        ) : 
        <div className='my-10 justify-center text-center mx-50 px-40 ' >

            <Loader />
        </div>
    )
}

export default Played
