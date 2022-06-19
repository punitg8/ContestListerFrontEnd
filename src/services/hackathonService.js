import http from "./httpService.js"
import { toast } from "react-toastify";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export async function getAllHackathon(callback){
  try{
    const response=await http.get(`${baseURL}/hackathon`);
    callback(response.data.data);
  }catch(err){
    console.log(err);
    toast.error("An unexpected error occured");
  }
}