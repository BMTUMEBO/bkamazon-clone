import axios from "axios"




const axiosInstance = axios.create({
    
    
//  baseURL: " http://localhost:5000"
baseURL:"https://amazon-backend-rxee.onrender.com"
    //deployed version of amazon server on render
//  baseURL: "https://amazon-api-deploy-6i7g.onrender.com/"
})

export {axiosInstance}