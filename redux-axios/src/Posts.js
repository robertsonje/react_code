import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from './actions';

function Posts(props) {
    const dispatch = useDispatch();
    const values = useSelector(state => state.data.payload);
    console.log('values:', values);
    const titles = values ? values.map((val)=>
    <li key = {val.id}>{val.title}</li>) : "No data found";
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    return (
        <div>
        <h1>Data from API call:</h1>
        <p>
            {titles}
        </p>
        </div>
    );
}

export default Posts;