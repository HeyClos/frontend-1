import axios from "axios";
import { FETCH_SINGLE_POST, FETCH_SINGLE_POST_SUCCESS, FETCH_SINGLE_POST_FAILURE } from "../actionTypes";

export function fetch_single_post(id) {
    return {
        type: FETCH_SINGLE_POST,
        payload: id
    }
}

export function fetch_single_post_success (activePost) {
    return {
        type: FETCH_SINGLE_POST_SUCCESS,
        payload: activePost
    }
}

export function fetch_single_post_failure(error) {
    return {
        type: FETCH_SINGLE_POST_FAILURE,
        payload: error
    }
}


export const getSinglePost = (id) => dispatch => {
    dispatch(fetch_single_post())
    axios.get(`http://localhost:3001/posts/${id}`)
        .then(res => {
           // console.log(res.data)
            dispatch(fetch_single_post_success(res.data))
        })
        .catch(error => {
            console.log(error.message)
            dispatch(fetch_single_post_failure(error.message))
        })
}