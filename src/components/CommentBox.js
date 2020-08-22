import React, {useState} from "react";
import { connect } from 'react-redux'
import * as actions from '../actions'
import requireAuth from "./requireAuth";

const X = ({saveComment, fetchComments}) => {
    const [comment, updateComment] = useState('')

    const submit = (e) => {
        e.preventDefault()
        saveComment(comment)
        updateComment('')
    }

    return <div>
        <form onSubmit={submit}>
        <h4>Add a comment</h4>

        <textarea value={comment} onChange={e=>updateComment(e.target.value)}/>
        <div>
            <button>Submit comment</button>
        </div>
    </form>
        <button className={'fetch-comments'} onClick={fetchComments}>fetch comments</button>
    </div>
}

export default connect(null, actions)(requireAuth(X))