"use strict"

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
export default function reducer(state = [{
	raceId: 1,
	results: {
		1: {kartId: 2},
		2: {kartId: 4},
		3: {kartId: 6},
		4: {kartId: 8},
		5: {kartId: 1},
		6: {kartId: 3},
		7: {kartId: 5},
		8: {kartId: 7}
	},
	selectedKart: 3,
	betResult: -10,
	odds: 0
},
{
	raceId: 2,
	results: {
		1: {kartId: 6},
		2: {kartId: 4},
		3: {kartId: 2},
		4: {kartId: 8},
		5: {kartId: 7},
		6: {kartId: 1},
		7: {kartId: 3},
		8: {kartId: 5}
	},
	selectedKart: 6,
	betResult: 50,
	odds: 0
}
], action) {	

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
			return [race].concat(state)

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
