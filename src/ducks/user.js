"use strict"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------

const WINS_INCREMENT = "react-kart/user/WINS_INCREMENT"
const LOSSES_INCREMENT = "react-kart/user/LOSSES_INCREMENT"
const BALANCE_ADD = "react-kart/user/BALANCE_ADD"
const BALANCE_SUBTRACT = "react-kart/user/BALANCE_SUBTRACT"
const RACES_INCREMENT = "react-kart/user/RACES_INCREMENT"
const SET_SELECTED_KART = "react-kart/user/SET_SELECTED_KART"

// REDUCER
// ----------------------------------------------------------------

export default function reducer(state = createUser(), action) {

	switch (action.type) {
		case WINS_INCREMENT:
			return Object.assign({}, state, { wins: state.wins + 1 })
		case LOSSES_INCREMENT:
			return Object.assign({}, state, { losses: state.losses + 1 })			
		case BALANCE_ADD:
			return Object.assign({}, state, { balance: state.balance + action.value })
		case BALANCE_SUBTRACT:

			let calculatedBalance = state.balance - action.value
			let balance = (calculatedBalance < 10)
								? 10
								: calculatedBalance

			return Object.assign({}, state, { balance })			

		case RACES_INCREMENT:
			return Object.assign({}, state, { races: state.races + 1 })			
		case SET_SELECTED_KART:
			return Object.assign({}, state, { selectedKart: action.kartId })						
		default:
			return state
	}	
}

// ACTION CREATORS
// ----------------------------------------------------------------

export function winsIncrement() {
	return { type: WINS_INCREMENT }
}

export function lossesIncrement() {
	return { type: LOSSES_INCREMENT }
}

export function balanceAdd(value) {
	return { 
		type: BALANCE_ADD,
		value
	}
}

export function balanceSubtract(value) {
	return { 
		type: BALANCE_SUBTRACT,
		value
	}
}

export function racesIncrement() {
	return { type: RACES_INCREMENT }
}

/**
	@kartId - kart to select
*/
export function setSelectedKart(kartId) {
	return { 
		type: SET_SELECTED_KART,
		kartId
	}
}

// OTHER
// ----------------------------------------------------------------

/**
	Note: this function is exported as it is used by the unit test script also.
*/
export function createUser() {
	return {
		wins: 0,
		losses: 0,
		balance: 10,
		races: 0,
		selectedKart: null
	}
}