import http from "./httpService.js"
import { toast } from "react-toastify";
const baseURL = process.env.REACT_APP_API_BASE_URL;

export async function getAllHiring(callback){
  try{
    const response=await http.get(`${baseURL}/hiring`);
    callback(response.data.data);
  }catch(err){
    console.log(err);
    toast.error("An unexpected error occured");
  }
}