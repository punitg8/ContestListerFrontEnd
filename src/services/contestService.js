import http from "./httpService.js"
import { toast } from "react-toastify";
const baseURL = "https://contest-lister.herokuapp.com/api"

export async function getAllContest(callback){
  try{
    const response=await http.get(`${baseURL}/contest`);
    callback(response.data.data);
  }catch(err){
    console.log(err);
    toast.error("An unexpected error occured!!!");
  }
}