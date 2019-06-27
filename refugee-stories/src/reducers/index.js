import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions'

const initialState = {}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_START: 
        return {...state, loginAttempt: true , user: {} }
        case LOGIN_SUCCESS:
            return {...state, loginAttempt: false , user: action.payload , error: {} }
        case LOGIN_FAILURE:
            return {...state, loginAttempt: false, error: action.payload }
        default:
            return state
    }
}

export default reducer;