import React, { useEffect, useState } from 'react'
import Axios from "axios"
import "./Card.css"

const Card = () => {
    const apikey="https://jsonplaceholder.typicode.com/posts";

    const [post,setPost]=useState([])
    useEffect(()=>{
        async function fetchData() {
           let postData = await Axios.get(apikey) 
           setPost(postData.data)
        }
        fetchData()
    },[])
    console.log(post);
    
  return (
    <div className='card-main'>
      {post.slice(0,10).map((data)=>(
        <div className='card-d'>
            <div className="card-title">
                {data.title}
            </div>
            <div className="card-body">
                {data.body}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Card
