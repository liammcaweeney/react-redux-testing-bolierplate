import React from "react";
import {connect} from "react-redux";

const mapStateToProps = ({comments}) => ({comments})

export default connect(mapStateToProps,null)(({comments}) => {
    return <div><ul>{comments.map((comment,key) => (<li key={key}>{comment}</li>))}</ul></div>
})