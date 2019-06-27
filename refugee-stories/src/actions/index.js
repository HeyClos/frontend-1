import axios from 'axios';

export const LOGIN_START='LOGIN_START';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_FAILURE='LOGIN_FAILURE';

export const login = (username,password) => dispatch => {
    dispatch({type: LOGIN_START})
    axios.post('https://lambda-bookr.herokuapp.com/api/auth/login', {username, password})
    // this is what i will alfter once backend gets back to me
    .then( res => {
        dispatch({type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(error => {
        dispatch({type: LOGIN_FAILURE, payload: error })
    })
}
