import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";
export const saveComment = (comment) => ({
    type: SAVE_COMMENT,
    payload: comment
})

export const fetchComments = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/comments')
    return {
        type: FETCH_COMMENTS,
        payload: await response.json()
    }
}