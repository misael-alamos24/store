// import { DEL_CATEGORIES, GET_CATEGORIES, POST_CATEGORIES, PUT_CATEGORIES } from "../constants";
import { uniqueObject } from '../constants/index.js'; 
// import { DEL_DOGS, DEL_ROLES, DEL_USERS, EDITION, GET_DOGS, GET_ROLES, GET_USERS, POST_DOGS, POST_ROLES, POST_USERS, PUT_DOGS, PUT_ROLES, PUT_USERS } from "../constants";
// console.log({uniqueObject}, uniqueObject['GET_PRODUCTS'])

const initialState= {
    list: {
        all: [],
    }
};

const rootReducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case uniqueObject['POST_LIST']: 
        // console.log({payload})
        return {
            ...state,
            list: {
                ...state.list,
                all: [...state.list.all, payload]
            }
        }; 
        case uniqueObject['DEL_LIST']: 
        // console.log({payload})
        return {
            ...state,
            list: {
                ...state.list,
                all: state.list.all.filter(e => e.id !== payload.id)
            }
        }; 
        case uniqueObject['PUT_LIST']: 
        // console.log({payload})
        return {
            ...state,
            list: {
                ...state.list,
                all: payload
            }
        }; 
        default: return state;
    };
};

export default rootReducer;