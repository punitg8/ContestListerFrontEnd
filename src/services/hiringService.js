import http from "./httpService.js"
import { toast } from "react-toastify";
const baseURL = "https://contest-lister.herokuapp.com/api"

export async function getAllHiring(callback){
  try{
    const response=await http.get(`${baseURL}/hiring`);
    callback(response.data.data);
  }catch(err){
    console.log(err);
    toast.error("An unexpected error occured");
  }
}