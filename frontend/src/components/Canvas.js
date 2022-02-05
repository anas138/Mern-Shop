import React,{useEffect,useRef} from 'react'
import { useAuth0 } from "@auth0/auth0-react" 
import axios from 'axios'
function Canvas() {
    const { loginWithRedirect,user,isAuthenticated,logout,getAccessTokenSilently } = useAuth0()
    useEffect(()=>{
        
       const arr=[1,1,2,2,3,3,4,6,6,7,7,9,9]
       arr.forEach(a=>{
        var count=0;
           arr.forEach(b=>{
               if(a==b){
                   count++
               }
           })
           if(count==1){
           // console.log(a,"notRepeat")
            
        }
       })

       var arr2=[13,14,5,4,7,8,9,2]
       var arr3=[]
       var el=arr2[0]
       const l=arr2.length;
        arr2.forEach((a,i)=>{
            let e=arr2[i]
            for(let k=i;k<l-1;k++){
                if(arr2[k]>e){
                    e=arr2[k]
                }
            }
            arr3.push(e)
            
        })
        arr3[l-1]=-1
        console.log(el,"ellll")
        console.log(arr3,"el")
    })
   const checkUser = async() =>{
       console.log(user)
       const token = await getAccessTokenSilently()
       console.log(token,"token")
   }
   const sendAuth0=async()=>{
       try{
         const token = await getAccessTokenSilently()
         const data=await axios.get("http://localhost:8080/auth0",{
           headers:{"token":token}
       })
       console.log(data)
   }
   catch(e){
       console.log(e)
      
   }
}
    return (
        <div>
            <button onClick={()=>{loginWithRedirect()}}>Login</button>
            <button onClick={()=>{logout()}}>Logout</button>
            <div>
                {
                  isAuthenticated &&
                    <div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    
                    </div>
                
                }
            </div>
            <button onClick={checkUser}>Check User</button>
            <button onClick={sendAuth0}>send autho</button>
        </div>
        )
}

export default Canvas
