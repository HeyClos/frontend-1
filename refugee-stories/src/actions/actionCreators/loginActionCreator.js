import  { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes";

export function login(params) {
    return {
        type: LOGIN,
    }
}

export function login_success(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export function login_failure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}