"use strict"

import { fromJS } from "immutable"

import { 
	NUMBER_OF_KARTS,
	MOVE_KART_DISTANCE
} from "../core/constants"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------
const WINS_INCREMENT_KART = "react-kart/karts/WINS_INCREMENT_KART"
const LOSSES_INCREMENT_KART = "react-kart/karts/LOSSES_INCREMENT_KART"
const MOVE_KART = "react-kart/karts/MOVE_KART"
const MOVE_KARTS_TO_START = "react-kart/karts/MOVE_KARTS_TO_START"

// REDUCER
// ----------------------------------------------------------------

/**
	@state - state of karts
	@action - action to be peformed on karts
*/
export default function reducer(state = fromJS(createKarts(NUMBER_OF_KARTS)), action) {	

	let kartId		// used for temporary storage of kart id we are working with

	switch (action.type) {
		case WINS_INCREMENT_KART:

			kartId = action.kartId.toString()
			let wins = state.getIn([kartId, "wins"])
			return state.setIn([kartId, "wins"], wins + 1)

		// -----------------------------------------------------
		case LOSSES_INCREMENT_KART:

			kartId = action.kartId.toString()
			let losses = state.getIn([kartId, "losses"])
			return state.setIn([kartId, "losses"], losses + 1)

		// -----------------------------------------------------
		case MOVE_KART:
			
			kartId = action.kartId.toString()
			let distance = state.getIn([kartId, "distance"])									
			return state.setIn([kartId, "distance"], distance + MOVE_KART_DISTANCE)	

		// -----------------------------------------------------
		case MOVE_KARTS_TO_START:

			// stateClone = clone(state) // clone state to avoid mutation

			// for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {			
			// 	state = state.setIn([action.kartId, "distance"], 0)
			// }

			// return state	

			return state.map(kart => kart.set("distance", 0))

		default:
			return state
	}
}

// ACTION CREATORS
// ----------------------------------------------------------------

/**
	@kartId - kart to increase win total for
*/
export function winsIncrementKart(kartId) {
	return { 
		type: WINS_INCREMENT_KART,
		kartId
	}
}

/**
	@kartId - kart to increase losses total for
*/
export function lossesIncrementKart(kartId) {
	return { 
		type: LOSSES_INCREMENT_KART,
		kartId
	}
}

/**
	@kartId - id of kart to move	
*/
export function moveKart(kartId) {
	return { 
		type: MOVE_KART,
		kartId
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
		 	wins: 0,
		 	losses: 0,
		 	distance: 0
		}
	}

	return initialState
}


