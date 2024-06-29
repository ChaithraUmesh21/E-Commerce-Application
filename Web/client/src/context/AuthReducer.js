import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from './types';

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
            case REGISTER_FAIL:
                case AUTH_ERROR:
                case LOGIN_FAIL:
                case LOGOUT:
                case CLEAR_ERRORS:
                    return {
                        ...state,
                        error: null
                    };
                default:
                    return state;
            }
        };
        