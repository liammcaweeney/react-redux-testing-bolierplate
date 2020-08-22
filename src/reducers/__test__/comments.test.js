import commentsReducer from '../comments'
import { SAVE_COMMENT } from "../../actions/types";

it('handles actions of type SAVE_COMMENTS', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    }
    const newState = commentsReducer([], action)
    expect(newState).toEqual([action.payload])
})

it('handle action with unknow type', () => {
    const newState = commentsReducer([], {type: 'sdfs'})
    expect(newState).toEqual([])
})