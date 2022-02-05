import React,{useState,useEffect} from 'react'

function Couter(props) {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setCount(count+props)
       
    },[props])
    const hCount=(num)=>{
        setCount(count+props)
    }

    return (
        [count,hCount]
    )
}

export default Couter
