import { GET_FOOD } from "../actionTypes"
import axios from "axios"

//get food
export const getFood=()=>(dispatch)=>{

    axios.get("/api/food/")
    .then((res)=>dispatch({type:GET_FOOD,payload:res.data}))
    .catch((err)=>console.log(err))

}

    //add food
export const registerFood=(newFood)=>(dispatch)=>{
    const options={
        headers:{
            authorization:localStorage.getItem("token")
        }
    }

    axios.post("/api/food",newFood,options)
    .then((res)=>dispatch())
    .catch((err)=>console.log(err))
    }
    