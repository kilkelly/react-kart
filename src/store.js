import { applyMiddleware, createStore } from "redux"
import createLogger from "redux-logger"
import { syncHistory } from "react-router-redux"
import rootReducer from "./ducks"

const finalCreateStore = applyMiddleware(createLogger())(createStore)
const store = finalCreateStore(rootReducer)

export default store
