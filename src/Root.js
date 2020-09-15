import React from "react";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import async from './middlewares/async'
import log from './middlewares/log'
import stateValidator from './middlewares/stateValidator'
import reducers from '../src/reducers'

export default ({children, initialState={}}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async, log, stateValidator)
    )

    return <Provider store={store}>
        {children}
    </Provider>
}

