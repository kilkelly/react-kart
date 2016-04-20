"use strict"

import clone from "clone"

import { 
	NUMBER_OF_KARTS,
	MOVE_KART_DISTANCE
} from "../core/constants"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------
const WINS_INCREMENT = "react-kart/karts/WINS_INCREMENT"
const LOSSES_INCREMENT = "react-kart/karts/LOSSES_INCREMENT"
const MOVE_KART = "react-kart/karts/MOVE_KART"
const MOVE_KARTS_TO_START = "react-kart/karts/MOVE_KARTS_TO_START"

// REDUCER
// ----------------------------------------------------------------

/**
	@state - state of karts
	@action - action to be peformed on karts
*/
export default function reducer(state = createKarts(NUMBER_OF_KARTS), action) {	

	let stateClone // some actions will need this variable to clone existing state into
	let objectToChange // some actions will need this variable to change a state object's value/s

	switch (action.type) {
		case WINS_INCREMENT:

			stateClone = clone(state) // clone state to avoid mutation
			objectToChange = stateClone[action.kartId]

			objectToChange.wins = objectToChange.wins + 1

			return stateClone

		// -----------------------------------------------------
		case LOSSES_INCREMENT:

			stateClone = clone(state) // clone state to avoid mutation
			objectToChange = stateClone[action.kartId]

			objectToChange.losses = objectToChange.losses + 1

			return stateClone

		// -----------------------------------------------------
		case MOVE_KART:

			stateClone = clone(state) // clone state to avoid mutation

			objectToChange = stateClone[action.kartId]
			objectToChange.distance = objectToChange.distance + action.distanceToMove

			return stateClone			

		// -----------------------------------------------------
		case MOVE_KARTS_TO_START:

			stateClone = clone(state) // clone state to avoid mutation

			for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
				stateClone[i].distance = 0
			}

			return stateClone	

		default:
			return state
	}
}

// ACTION CREATORS
// ----------------------------------------------------------------

/**
	@kartId - kart to increase win total for
*/
export function winsIncrement(kartId) {
	return { 
		type: WINS_INCREMENT,
		kartId
	}
}

/**
	@kartId - kart to increase losses total for
*/
export function lossesIncrement(kartId) {
	return { 
		type: LOSSES_INCREMENT,
		kartId
	}
}

/**
	@kartId - id of kart to move
	@distanceToMove - distance to move towards finish line
*/
export function moveKart(kartId, distanceToMove) {
	return { 
		type: MOVE_KART,
		kartId,
		distanceToMove
	}
}

/**

*/
export function moveKartsToStart() {
	return { type: MOVE_KARTS_TO_START }
}

// OTHER
// ----------------------------------------------------------------

/**
	@numberOfKarts - number of karts to account for in state
	@testMode = set this flag during unit tests due

	Note: this function is exported as it is used by the unit test script also.
*/
export function createKarts(numberOfKarts, testMode = false) {

	const karts = require("../config/karts")(testMode)	

	let initialState = {}

	for (let i = 1; i <= numberOfKarts; i = i + 1) {
		initialState[i] = { 
			id: i,
			name: karts[i].name,
		 	image: karts[i].image,
		 	wins: 2,
		 	losses: 77,
		 	distance: 0
		}
	}

	return initialState
}


