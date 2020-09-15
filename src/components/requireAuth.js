import React, {useEffect} from "react";
import {connect} from "react-redux";

export default ChildComponent => {
    const ComposedComponent = (props) => {
        const { auth , history } = props
        useEffect(()=>{
            if (!auth) history.push('/')
        },[auth, history])
        return (<ChildComponent {...props}/>)
    }

    const mapStateToProps = ({auth}) => ({auth})
    return connect(mapStateToProps)(ComposedComponent)
}