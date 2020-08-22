import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

import { Route, Link } from "react-router-dom";
import {connect} from "react-redux";
import * as actions from '../actions'


const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps, actions)(({auth, changeAuth}) => {

    const renderButton = () => (
        <button onClick={() => {auth? changeAuth(false): changeAuth(true)}}>{`Sign ${auth? 'Out': 'In'}`}</button>
    )

    const renderHeader = () => (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/post'>Post A Comment</Link>
            </li>
            <li>
                {renderButton()}
            </li>
        </ul>
    )

    return (
        <div>
            {renderHeader()}
            <Route path='/post' component={CommentBox}/>
            <Route exact path='/' component={CommentList}/>
        </div>
    )
})