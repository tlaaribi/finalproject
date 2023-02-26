
import { GET_FOOD } from "../actionTypes"

const initState={
    foods:[]
}
export const foodReducer=(state=initState,action)=>{
switch(action.type){
    case GET_FOOD:
        return{
            ...state,
            foods:action.payload
        }
        default:
            return state
}
}