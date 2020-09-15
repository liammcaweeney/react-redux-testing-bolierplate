import stateSchema from "./stateSchema"
import tv4 from 'tv4'
export  default ({getState}) => next => action => {
    next(action)
    if(!tv4.validate(getState(),stateSchema)){
        console.warn('invalid schema detected')
    }
}