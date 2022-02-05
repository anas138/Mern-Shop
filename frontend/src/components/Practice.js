import React,{useEffect,useState} from 'react'
import useCounter from './Custom-Hook/Couter'

function Practice() {
    const [count,setCount]=useCounter(1)
    const [name,setName]=useState()
    const clickButton=()=>{
        setCount(1)
      console.log(count,'anas');

    }
    const createf=(callback)=>{
         callback("anas")
    }
   
    return (
        <div>
           
            <button onClick={clickButton}>click</button>
            <button onClick={()=>{
                createf(name=>{
                    setName(name)
                })
            }}>callback</button>
            <div>{name}</div>
        </div>
    )
}

export default Practice
