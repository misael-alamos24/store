export function postList (item) {
    return {
        type: 'POST_LIST',
        payload: item
    }
}
export function delList (item) {
    return {
        type: 'DEL_LIST',
        payload: item
    }
}
export function putList (item) {
    return {
        type: 'PUT_LIST',
        payload: item
    }
}