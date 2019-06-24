import axios from "axios";
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "../actionTypes";


  export function fetch_posts() {
      return {
        type: FETCH_POSTS,
      }
  }

  export function fetch_posts_success(posts)  {
      return {
          type: FETCH_POSTS_SUCCESS,
          payload: posts
      }
  }

  export function fetch_posts_failure(error) {
      return {
        type: FETCH_POSTS_FAILURE,
        payload: error
      }
  }

  export const getPosts = () => dispatch => {
      dispatch(fetch_posts())
      axios.get('http://localhost:3001/posts')
        .then(res => {
          dispatch(fetch_posts_success(res.data))
        })
        .catch(error => {
            console.log(error.message)
            dispatch(fetch_posts_failure(error.message))
        })
  }
