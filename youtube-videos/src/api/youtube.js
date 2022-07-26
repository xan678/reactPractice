import axios from "axios";

const KEY = 'AIzaSyCcdMcKPVbq92MQWoHXTxq56TCvXfeWYfQ';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        type : 'video',
        key : KEY
   }
})