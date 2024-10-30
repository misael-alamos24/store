import axios from "axios";
import { API_URL } from "../../config/environment.js";

export const universalRoute = (route, method, paths, body) => {
    return async function (dispatch) {
        let path = Array.isArray(paths) ? paths.join('/') : paths
        axios[method](`${API_URL}/${route}/${path}`, body && body
        ).then(r => {
            console.log({r, type: method.toUpperCase()+'_'+route.toUpperCase()+'S'})
            dispatch({
                type: method.toUpperCase()+'_'+route.toUpperCase()+'S',
                // payload: ((r.data && r.data.required) || (r.data && r.data.registers)) || [],
                payload: r.data,
            })
        }).catch(e => console.log(`Error in ${method} ${route}`,{e}));
    }
};