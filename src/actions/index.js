import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from "./types";
export const saveComment = (comment) => ({
    type: SAVE_COMMENT,
    payload: comment
})

export const fetchComments = () => {
    const response = fetch('http://jsonplaceholder.typicode.com/comments')
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export const changeAuth = (isLoggedIn) => ({
    type: CHANGE_AUTH,
    payload: isLoggedIn
})