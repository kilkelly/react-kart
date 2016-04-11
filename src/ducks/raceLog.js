"use strict"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------
const LOG_RACE = "react-kart/karts/LOG_RACE"

// REDUCER
// ----------------------------------------------------------------

/**
	@state - races logged so far
	@action - actions to be performed on race log
*/
export default function reducer(state = {}, action) {	

	switch (action.type) {
		case LOG_RACE:

			// return a new array with the logged race added on to the front
			return state.slice(0).shift(action.race)

		default:
			return raceLog
	}
}

// ACTION CREATORS
// ----------------------------------------------------------------

/**
	@race - race object to log
*/
export function logRace(race) {
	return { 
		type: LOG_RACE,
		race
	}
}


// OTHER
// ----------------------------------------------------------------
