"use strict"

import { applyMiddleware, createStore } from "redux"
import createLogger from "redux-logger"
import { syncHistory } from "react-router-redux"
import { fromJS } from "immutable"

import { APP_NAME, NUMBER_OF_KARTS } from "./core/constants"
import rootReducer from "./ducks"
import { createUser } from "./ducks/user"
import { createKarts } from "./ducks/karts"
import { createRaceLog } from "./ducks/raceLog"

import { save, load, combineLoads, clear } from "redux-localstorage-simple"
//import { save, load, combineLoads, clear } from "./redux-localstorage-simple"

let store

export default function() {
	if (typeof store === "object") {
		console.log("Returning existing store")
		return store
	}
	else {

		let middleware = [
			/*createLogger(),*/
			save({ states: ["user", "karts", "raceLog"] })
		]

		const finalCreateStore = applyMiddleware(...middleware)(createStore)
		store = finalCreateStore(
			rootReducer,	
			load({
				states: ["user", "karts", "raceLog"],
				immutablejs: true
			})
		/*	combineLoads(
				load({ states: ["user"], immutablejs: true }),
				load({ states: ["karts"], immutablejs: true }),
				load({ states: ["raceLog"], immutablejs: true })
			)*/	
		)

		console.log("Creating store")
		return store
	}
}
