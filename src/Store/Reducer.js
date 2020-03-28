import {combineReducers} from 'redux'
import { messageContainerReducer } from './MessageContainerReducer'

export const rootReducer = combineReducers({
    messages: messageContainerReducer
})