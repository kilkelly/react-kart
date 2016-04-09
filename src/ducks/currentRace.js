"use strict"

import clone from "clone"
import { NUMBER_OF_KARTS } from "../core/constants"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------
const START_RACE = "react-kart/karts/START_RACE"
const END_RACE = "react-kart/karts/END_RACE"
const MOVE_KART = "react-kart/karts/MOVE_KART"
const RESET_RACE = "react-kart/karts/RESET_RACE"

// REDUCER
// ----------------------------------------------------------------

/**
	@state - state of current race
	@action - action to be peformed on current race
*/
export default function reducer(state = resetCurrentRace(NUMBER_OF_KARTS), action) {	

	let stateClone // some actions will need this variable to clone existing state into
	let objectToChange // some actions will need this variable to change a state object's value/s

	switch (action.type) {

		// -----------------------------------------------------
		case START_RACE:

			return Object.assign({}, state, { 
				currentRaceId: action.currentRaceId
				inProgress: true,
				betAmount: action.betAmount
			})

		// -----------------------------------------------------
		case END_RACE:

			return Object.assign({}, state, { inProgress: false })		

		// -----------------------------------------------------
		case MOVE_KART:

			stateClone = clone(state) // clone state to avoid mutation

			objectToChange = stateClone.kartDistances[action.kartId]
			objectToChange.distance = objectToChange.distance + action.distanceToMove

			return stateClone

			})		

		// -----------------------------------------------------
		case RESET_RACE:

			return resetCurrentRace(NUMBER_OF_KARTS, action.currentRaceId)

		default:
			return state
	}
}

// ACTION CREATORS
// ----------------------------------------------------------------

/**
	@betAmount - amount that user has bet on this race
*/
export function startRace(currentRaceId, betAmount) {
	return { 
		type: START_RACE,
		currentRaceId
		betAmount
	}
}

/**
	
*/
export function endRace() {
	return { type: END_RACE	}
}

/**
	@kartId - id of kart to move
	@distanceToMove - distance to move towards finish line
*/
export function moveKart(kartId, distanceToMove) {
	return { 
		type: MOVE_KART,
		kartId
		distanceToMove
	}
}

/**
	
*/
export function resetRace() {
	return { type: RESET_RACE }
}

// OTHER
// ----------------------------------------------------------------

/**
	@numberOfKarts - number of karts to account for in state

	Note: this function is exported as it is used by the unit test script also.
*/
export function resetCurrentRace(numberOfKarts) {

	let kartDistances = {}

	for (let i = 1; i <= numberOfKarts; i = i + 1) {
		kartDistances[i] = { kartId: i, distance: 0 }
	}

	const currentRace = {
		currentRaceId: null
		kartDistances,
		inProgress: false,
		betAmount: 0,
		winner: null		
	}

	return currentRace

}