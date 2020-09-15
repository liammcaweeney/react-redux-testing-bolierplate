export default ({ dispatch }) => next => action => {
    if(!action.payload || !action.payload.then) return next(action)
    action.payload.then( res => res.json().then( resJSON => dispatch({...action, payload: resJSON}) ) )
}