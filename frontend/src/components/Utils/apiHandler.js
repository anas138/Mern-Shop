import axios from "axios"
class ApiHandler{
    getAllProducts= async () =>{
    let payload
   await axios.get("http://localhost:8080/addProducts")
    .then(res => {
         payload=res.data
    })
    return payload;
   }
}

export default ApiHandler