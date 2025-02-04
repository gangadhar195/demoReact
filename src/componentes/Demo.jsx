import React, { useState } from 'react'
import "./Demo.css"

const Demo = () => {

    const [name,setName]= useState("");
    const [email,setEmail]=useState();
    const [age,setAge] = useState();


    console.log(name)



    function Message(){
        if(name=="" || email=="" || age==""){
            alert(" does not empty")
        }
        
        else{
            console.log("My name is ",name ,"age  ",age,"Email  ",email);
        }
       
       
    }
  return (
    
    <div>
      <form className='contact'>
        <input type='text' placeholder='Enter Name' name="" onChange={(s)=>setName(s.target.value)
       }   ></input>
       
        <input type='email'  placeholder='Enter Email' value={email} onChange={(s)=>setEmail(s.target.value)} required></input>
        <input type='Number'  placeholder='Enter Age' value={age} onChange={(s)=>setAge(s.target.value)} required></input>
        <button type='button' onClick={Message}>Submit</button>
      </form>
    </div>
  )
}

export default Demo
