const initState = {
    authEror: null
}
const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authEror: 'Login Failed'
        }
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                authEror: null
        }
        case 'SIGNUOUT_SUCCESSFULLY':
            console.log('SignOut Successfully');
            return state;
        case "SIGNUP_SUCCESSFULLY":
            console.log('signUp Successfully')
            return {
                ...state,
                authEror : null
            }
        case 'SIGNUP_ERROR':
            console.log('signup Error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
        
    }
}

export default authReducer; 