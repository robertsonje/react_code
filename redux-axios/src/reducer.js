import { createReducer, isFulfilled } from "@reduxjs/toolkit";
import {fetchPosts} from './actions';


const initState = {
    value: 0,
    data: []
}

const postReducer = createReducer(initState, (builder) => {
    builder
    .addCase(fetchPosts.fulfilled, (state, action) => {
        let newState = state;
        console.log('Got the data');
        newState.data = action.payload;
        return newState;
    })
    .addCase(fetchPosts.pending, (state) => {
        console.log('Waiting...');
        return state;
    })
    .addCase(fetchPosts.rejected, (state) => {
        console.log("Can't get the data");
        return state;
    })
})
export default postReducer;