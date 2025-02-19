import React, { useEffect, useState } from "react"

const UseEffect = () =>{
    const [secound,setSecound] = useState(0)

    useEffect(()=>{
        // const interval = setInterval(()=>{
        //     setSecound((prev)=>prev+1);
        // },1000)
        // return () => clearInterval(interval); 

    },[])

    return(
        <div>
            <h1>Hello {secound}</h1>
        </div>
    )
}

export default UseEffect