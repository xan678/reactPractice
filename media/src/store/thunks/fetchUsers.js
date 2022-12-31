import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async() =>{
    const response = await axios.get('http://localhost:3005/users');
    //Dev only
    await pause(1000);
    return response.data;
});

//Dev only Helper Function

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export { fetchUsers };