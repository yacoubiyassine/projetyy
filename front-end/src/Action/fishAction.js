import axios from "axios"
import { GET_FISH } from "../ActionTypes/fishType"

export const get_fish=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/fish/fish')
        dispatch({type:GET_FISH,payload:res.data})
    } catch (error) {
        
    }
}