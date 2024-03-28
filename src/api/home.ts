import axios from "axios"
import { BaseURL } from "./config"



const API ={
    HOME:""
}




export const getDataHome =async ()=>{


    try {
        
        const res =   await fetch("https://cors-anywhere.herokuapp.com/http://91.107.124.108/api")
        return (res.json())
    } catch (error) {

        
        return []
    }



}