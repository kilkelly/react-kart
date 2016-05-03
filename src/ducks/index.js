"use strict"

import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import user from "./user"
import karts from "./karts"
import currentRace from "./currentRace"
import raceLog from "./raceLog"

export default combineReducers({
	user,
	karts,
	currentRace,
	raceLog,
	routing
})