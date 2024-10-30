import axios from "axios";
import { API_URL } from "../../config/environment.js";
import { DEL_USERS, GET_USERS, LOG_USERS, POST_USERS, PUT_USERS } from "../constants";

export const universalUsers = (method, body) => {
    return async function (dispatch) {
        axios[method](`${API_URL}/user/${method}`, body && body
        ).then(r => dispatch({
            type: method.toUpperCase()+'_USERS',
            payload: r.data?.users || [],
        })).catch(e => console.log(`Error in ${method}Users`,{e}));
    }
};

export const logUsers = (body) => { // only one
    return async function (dispatch) {
        axios.post(`${API_URL}/user/log`, body)
        .then(r => dispatch({
            type: LOG_USERS,
            payload: r.data || {},
        })).catch(e => console.log('Error in getUsers',{e}));
    }
};

export const getUsers = () => {
    return async function (dispatch) {
        axios.get(`${API_URL}/user/get`)
        .then(r => dispatch({
            type: GET_USERS,
            payload: r.data?.users || [],
        })).catch(e => console.log('Error in getUsers',{e}));
    }
};

export const postUser = (body) => {
    return async function (dispatch) {
        axios.post(`${API_URL}/user/post`, body)
        .then(r => {
            console.log({r}); 
            return dispatch({
                type: POST_USERS,
                payload: r.data || [],
            })
        }).catch(e => console.log('Error in postUser', {e}));
    }
};

export const putUser = (body) => {
    return async function (dispatch) {
        axios.put(`${API_URL}/user/put`, body)
        .then(r => dispatch({
            type: PUT_USERS,
            payload: r.data?.users || [],
        })).catch(e => console.log('Error in putUser', {e}));
    }
};

export const deleteUser = (body) => {
    return async function (dispatch) {
        axios.delete(`${API_URL}/user/delete`, body)
        .then(r => dispatch({
            type: DEL_USERS,
            payload: r.data?.users || [],
        })).catch(e => console.log('Error in deleteUser', {e}));
    }
};