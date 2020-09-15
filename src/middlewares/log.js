export default () => next => action => {
    console.log(`the action is of type: ${action.type}.`)
    next(action)
}