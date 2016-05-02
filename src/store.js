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
		namespace: APP_NAME,
		reducers: ["user", "karts", "raceLog"]
	})	
]

const finalCreateStore = applyMiddleware(...middleware)(createStore)
const store = finalCreateStore(
	rootReducer,
	loadReduxState({
		reducers: ["user", "karts", "raceLog"],
		namespace: APP_NAME,
		immutablejs: true // using immutable.js structures
	})
)


function loadReduxState(config) {	

	var initialState = {}
	var namespace = ""
	var immutablejs = false

	if (!config.hasOwnProperty("reducers")) {
		throw new Error("Reducers not provided")
	}

	if (config.hasOwnProperty("namespace")) {
		namespace = config.namespace + "_"
	}

	if (config.hasOwnProperty("immutablejs")) {
		immutablejs = config.immutablejs
	}	

	config.reducers.forEach(function(reducer) {		

		if (localStorage[namespace + reducer]) {
			if (immutablejs) {
				initialState[reducer] = fromJS(JSON.parse(localStorage[namespace + reducer]))
			}
			else {
				initialState[reducer] = JSON.parse(localStorage[namespace + reducer])
			}

		}		
	})	

	return initialState
}


export default store
