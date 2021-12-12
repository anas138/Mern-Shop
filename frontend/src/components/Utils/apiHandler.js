import axios from "axios"
class ApiHandler{
    getAllProducts= async () =>{
         console.log(localStorage.getItem('token'),"token")
    let payload
   await axios.get("http://localhost:8080/addProducts",{
        headers:{
             auth:localStorage.getItem('token')
        }
   })
    .then(res => {
         payload=res.data
    })
    return payload;
   }

   addProduct= async(data)=>{
        let payload
    await axios.post('http://localhost:8080/addProducts', data)
     .then(res => {
         console.log(res)
         payload=res
     })
     return payload
   }

   updateProduct= async(data)=>{
        let payload;
    await axios.post("http://localhost:8080/updateproduct",data)
     .then(res=>{
         console.log(res);
         payload=res
     })
     return payload
   }
   deleteHandler= async(e)=>{
        let payload;
    await axios.get(`http://localhost:8080/deleteProduct?id=${e.target.value}`)
     .then(res=>{
         console.log(res)
         payload=res
     })
       return payload
   }
}

export default ApiHandler