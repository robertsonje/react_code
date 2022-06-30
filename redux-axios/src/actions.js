import axios from "axios"
import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('fetchPosts', async() => {
    const promise = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(promise.data);
    return {
        payload: promise.data
    }
})