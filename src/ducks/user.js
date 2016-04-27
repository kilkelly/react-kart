"use strict"

import { fromJS } from "immutable"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------

const WINS_INCREMENT_USER = "react-kart/user/WINS_INCREMENT_USER"
const LOSSES_INCREMENT_USER = "react-kart/user/LOSSES_INCREMENT_USER"
const BALANCE_ADD = "react-kart/user/BALANCE_ADD"
const BALANCE_SUBTRACT = "react-kart/user/BALANCE_SUBTRACT"
const RACES_INCREMENT = "react-kart/user/RACES_INCREMENT"
const SET_SELECTED_KART = "react-kart/user/SET_SELECTED_KART"

// REDUCER
// ----------------------------------------------------------------

export default function reducer(state = createUser(), action) {	

	switch (action.type) {
		case WINS_INCREMENT_USER:		
			return state.set("wins", state.get("wins") + 1)
		case LOSSES_INCREMENT_USER:
			return state.set("losses", state.get("losses") + 1)
		case BALANCE_ADD:
			return state.set("balance", state.get("balance") + action.value)			
		case BALANCE_SUBTRACT:

			let calculatedBalance = state.get("balance") - action.value
			let subtractedBalance = (calculatedBalance < 10)
								? 10
								: calculatedBalance

			return state.set("balance", subtractedBalance)

		case RACES_INCREMENT:
			return state.set("races", state.get("races") + 1)			
		case SET_SELECTED_KART:
			return state.set("selectedKart", action.kartId)						
		default:
			return state
	}	
}

// ACTION CREATORS
// ----------------------------------------------------------------

export function winsIncrementUser() {
	return { type: WINS_INCREMENT_USER }
}

export function lossesIncrementUser() {
	return { type: LOSSES_INCREMENT_USER }
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
	return fromJS({
		wins: 0,
		losses: 0,
		balance: 250,
		races: 0,
		selectedKart: null
	})
}