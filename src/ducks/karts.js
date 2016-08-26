"use strict"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3

import { fromJS } from "immutable"

import { 
	NUMBER_OF_KARTS,
	MOVE_KART_DISTANCE
} from "../core/constants"


// CONSTANTS
// ----------------------------------------------------------------
const WINS_INCREMENT_KART = "react-kart/karts/WINS_INCREMENT_KART"
const LOSSES_INCREMENT_KART = "react-kart/karts/LOSSES_INCREMENT_KART"
const MOVE_KART = "react-kart/karts/MOVE_KART"
const MOVE_KARTS_TO_START = "react-kart/karts/MOVE_KARTS_TO_START"

const toString = x => x.toString()
const increment = x => x + 1

const stringSafeUpdateIn = function (data, keyPath, updater) {
	return data.updateIn(keyPath.map(toString), updater)
}

// REDUCER
// ----------------------------------------------------------------

/**
	@state - state of karts
	@action - action to be peformed on karts
*/
export default function reducer(state = createKarts(NUMBER_OF_KARTS), action) {	

	let kartId		// used for temporary storage of kart id we are working with

	switch (action.type) {
		case WINS_INCREMENT_KART:

/*			kartId = action.kartId.toString()
			let wins = state.getIn([kartId, "wins"])
			return state.setIn([kartId, "wins"], wins + 1)*/

			return stringSafeUpdateIn(
				state,
				[action.kartId, "wins"],
				increment
			)	

		// -----------------------------------------------------
		case LOSSES_INCREMENT_KART:

			return stringSafeUpdateIn(
				state,
				[action.kartId, "losses"],
				increment
			)

		// -----------------------------------------------------
		case MOVE_KART:		

			return stringSafeUpdateIn(
				state,
				[action.kartId, "distance"],
				distance => distance + MOVE_KART_DISTANCE
			)			

		// -----------------------------------------------------
		case MOVE_KARTS_TO_START:

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
		 	wins: karts[i].wins,
		 	losses: karts[i].losses,
		 	distance: 0
		}
	}

	return fromJS(initialState)
}

/**
	Calculates a lucky value based on wins and losses
	@wins - id of kart to calculate lucky index for
	@losses - 
*/
export function lucky(wins, losses) {	
	// prevent division by zero
	if (wins + losses !== 0) {
		return Math.floor(wins * 100 / (wins + losses))
	} else {
		return 0
	}
	
}

/**
	Calculates a kart's winning
	@kart - the kart to calculate winnings for
	@betAmount - amount the user bet on the kart
	@previous - calculate winnings before win was counted
*/
export function calculateWinnings(kart, betAmount, previous = false) {
	let luckiness = lucky(kart.wins - (previous ? 1 : 0), kart.losses)
	// a little bit more of a bonus for betting on a winner, more exciting!
	let extra = 7
	let winMultiplier = (100-luckiness) / 100		

	// calculate projected winnings
	return Math.floor(betAmount + (betAmount * winMultiplier * extra))	
}

/**
	Calculates a kart's losses
	@kart - the kart to calculate losses for
	@betAmount - amount the user bet on the kart
	@previous - calculate winnings before loss was counted
*/
export function calculateLoss(kart, betAmount, previous = false) {
	let luckiness = lucky(kart.wins, kart.losses - (previous ? 1 : 0))
	let lossMultiplier = luckiness / 100

	// calculate projected winnings
	return Math.floor(betAmount + (betAmount * lossMultiplier))	
}

