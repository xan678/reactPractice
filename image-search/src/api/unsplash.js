import axios from "axios";

//Create instance of axios client 
export default axios.create({
    baseURL : "https://api.unsplash.com/",
    headers : {
        Authorization: "Client-ID kTb11oLTJTLpVSIA40q5SKN_fWWdHs0ziFwgcuIlVVQ"
    }
});