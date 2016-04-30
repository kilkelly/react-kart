"use strict"

import { applyMiddleware, createStore } from "redux"
import createLogger from "redux-logger"
import { syncHistory } from "react-router-redux"
import { fromJS } from "immutable"

import { APP_NAME, NUMBER_OF_KARTS } from "./core/constants"
import persistRedux from "./middleware/persistRedux"
import rootReducer from "./ducks"
import { createUser } from "./ducks/user"
import { createKarts } from "./ducks/karts"
import { createRaceLog } from "./ducks/raceLog"

let middleware = [
	//createLogger(),
	persistRedux({
		appName: APP_NAME,
		reducers: ["user", "karts", "raceLog"]
	})	
]

const finalCreateStore = applyMiddleware(...middleware)(createStore)
const store = finalCreateStore(rootReducer, {
	user: loadFromLocalStorage("user") || createUser(),
	karts: loadFromLocalStorage("karts") || createKarts(NUMBER_OF_KARTS),
	raceLog: loadFromLocalStorage("raceLog") || createRaceLog()
})

//const store = finalCreateStore(rootReducer, {})

function loadFromLocalStorage(key) {
	return localStorage[APP_NAME + "_" + key] 
			? fromJS(JSON.parse(localStorage[APP_NAME + "_" + key]))
			: null
}


export default store
