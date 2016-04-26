"use strict"

import { fromJS } from "immutable"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------
const LOG_RACE = "react-kart/raceLog/LOG_RACE"

// REDUCER
// ----------------------------------------------------------------

/**
	@state - races logged so far
	@action - actions to be performed on race log
*/
export default function reducer(state = fromJS([]), action) {	

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

			// return a new array with the current race logged with the previous races
			//return [race].concat(state)
			return state.unshift(fromJS(race))

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
