"use strict"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3

import { fromJS } from "immutable"

import { RACE_LOG_SIZE } from "../core/constants"

// CONSTANTS
// ----------------------------------------------------------------
const LOG_RACE = "react-kart/raceLog/LOG_RACE"

// REDUCER
// ----------------------------------------------------------------

/**
	@state - races logged so far
	@action - actions to be performed on race log
*/
export default function reducer(state = createRaceLog(), action) {	

	switch (action.type) {
		case LOG_RACE:

			//** build up the race object to log
			let race = {}
			race.raceId = action.race.raceId
			race.results = action.race.results
			race.selectedKart = action.race.selectedKart
			race.betResult = action.race.betResult
			race.odds = action.race.odds
			//*						

			if (state.size >= RACE_LOG_SIZE) {
				// Return a new array with the current race logged with the previous races.
				// Oldest race is popped off the end to stay within maximum race log size.
				return state.pop().unshift(fromJS(race))
			} else {
				// return a new array with the current race logged with the previous races
				return state.unshift(fromJS(race))
			}

		default:
			return state
	}
}

// ACTION CREATORS
// ----------------------------------------------------------------

/**
	@race - object containing all elements of the race to log
*/
export function logRace(race) {	

	return { 
		type: LOG_RACE,
		race
	}
}


// OTHER
// ----------------------------------------------------------------

/**
	Note: this function is exported as it is used by the unit test script also.
*/
export function createRaceLog() {
	return fromJS([])
}
