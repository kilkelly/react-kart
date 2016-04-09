"use strict"

import clone from "clone"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------
const WINS_INCREMENT = "react-kart/karts/WINS_INCREMENT"
const LOSSES_INCREMENT = "react-kart/karts/LOSSES_INCREMENT"
const SELECT_KART = "react-kart/karts/SELECT_KART"

export const NUMBER_OF_KARTS = 4

// REDUCER
// ----------------------------------------------------------------

/**
	@karts - state of karts
	@action - action to be peformed on karts
*/
export default function reducer(karts = createInitialKarts(NUMBER_OF_KARTS), action) {	

	let kartsToReturn // some actions will need this variable to copy existing karts
	let kartToChange // some actions will need this variable to change a kart's value/s

	switch (action.type) {
		case WINS_INCREMENT:

			kartsToReturn = clone(karts) // clone state to avoid mutation
			kartToChange = kartsToReturn[action.kartId - 1]

			kartToChange.wins = kartToChange.wins + 1
			
			return kartsToReturn

		case LOSSES_INCREMENT:

			kartsToReturn = clone(karts) // clone state to avoid mutation
			kartToChange = kartsToReturn[action.kartId - 1]

			kartToChange.losses = kartToChange.losses + 1

			return kartsToReturn

		case SELECT_KART:

			return selectKartWithinKarts(karts, action.kartId)

		default:
			return karts
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
	@kartId - kart to select
*/
export function selectKart(kartId) {
	return { 
		type: SELECT_KART,
		kartId
	}
}

// OTHER
// ----------------------------------------------------------------

/**
	@numberOfKarts - number of karts to account for in state

	Note: this function is exported as it is used by the unit test script also.
*/
export function createInitialKarts(numberOfKarts) {

	let initialKarts = []

	for (let i = 0; i < numberOfKarts - 1; i = i + 1) {
		initialKarts[i] = { kartId: i, name: "kart" + i, image: "", wins: 0, losses: 0, selected: false }
	}

	return initialKarts
}

/**
	@prevKarts - current karts state passed so that we don't need to reference an outside variable
	@kartId - id of kart we would like to select

	Note: this function is exported as it is used by the unit test script also.
*/
export function selectKartWithinKarts(prevKarts, kartId) {

	let nextKarts = clone(prevKarts) // make copy of karts to keep function pure

	// cancel previous kart selection
	nextKarts.map(kart => kart.selected = false)

	// select kart
	nextKarts[kartId - 1].selected = true
	return nextKarts
}

