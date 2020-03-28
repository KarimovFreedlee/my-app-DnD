import App from "./components/App"
import React from "react"
import {render} from "react-dom"
import {compose, createStore} from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from "./Store/Reducer"

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

render (<Provider store = {store}><App/></Provider>, document.getElementById("root"));
