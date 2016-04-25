"use strict"

import { fromJS } from "immutable"
import { NUMBER_OF_KARTS } from "../core/constants"

// The Ducks File Structure for Redux
// - https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.6rrizzva3


// CONSTANTS
// ----------------------------------------------------------------
const START_RACE = "react-kart/currentRace/START_RACE"
const END_RACE = "react-kart/currentRace/END_RACE"
const RESET_RACE = "react-kart/currentRace/RESET_RACE"
const UPDATE_RANKINGS = "react-kart/currentRace/UPDATE_RANKINGS"

// REDUCER
// ----------------------------------------------------------------

/**
	@state - state of current race
	@action - action to be peformed on current race
*/
export default function reducer(state = fromJS(resetCurrentRace(NUMBER_OF_KARTS)), action) {	

	switch (action.type) {

		// -----------------------------------------------------
		case START_RACE:

			return state.merge({ 
				currentRaceId: action.raceId,
				inProgress: true,
				betAmount: action.betAmount
			})

		// -----------------------------------------------------
		case END_RACE:

			return state.merge({ 
				winnerId: action.winnerId
			})

		// -----------------------------------------------------
		case RESET_RACE:

			return fromJS(resetCurrentRace(NUMBER_OF_KARTS))

		// -----------------------------------------------------
		case UPDATE_RANKINGS:

			//** create a helper array to sort karts by distance traveled (in descending order)
			// array format (unsorted)
			//	[
			//		{ kartId: 1, distance: 500 },
			//		{ kartId: 2, distance: 650 },
			//		{ kartId: 3, distance: 400 },
			// 		etc...
			//	]
			let rankingsCalc = []
			for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
				rankingsCalc.push({
					kartId: i,
					distance: action.karts[i].distance
				})
			}	
			//*		

			// array format (sorted)
			//	[
			//		{ kartId: 2, distance: 650 },
			//		{ kartId: 1, distance: 500 },
			//		{ kartId: 3, distance: 400 },
			// 		etc...
			//	]
			rankingsCalc.sort((a, b) => {
				return a.distance < b.distance
			})

			//** use the helper array to update rankings for current race
			let rankings = {}
			rankingsCalc.forEach((ranking, i) => {
				rankings[i + 1] = { kartId: ranking.kartId }
			})
			//*

			return state.merge({ rankings })

		default:
			return state
	}
}

// ACTION CREATORS
// ----------------------------------------------------------------

/**
	@raceId - id of the race being run
	@betAmount - amount that user has bet on this race
*/
export function startRace(raceId, betAmount) {
	return { 
		type: START_RACE,
		raceId,
		betAmount
	}
}

/**
	@winnerId - id of winning kart
*/
export function endRace(winnerId) {
	return { 
		type: END_RACE,
		winnerId
	}
}

/**
	
*/
export function resetRace() {
	return { type: RESET_RACE }
}

/**
	@karts - all karts in this race
*/
export function updateRankings(karts) {
	return { 
		type: UPDATE_RANKINGS,
		karts
	}
}

// OTHER
// ----------------------------------------------------------------

/**
	@numberOfKarts - number of karts to create in state

	Note: this function is exported as it is used by the unit test script also.
*/
export function resetCurrentRace(numberOfKarts) {

	//** provide blank rankings
	let rankings = {}
	for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
		rankings[i] = { kartId: null }
	}
	//*

	const currentRace = {
		currentRaceId: null,
		inProgress: false,
		rankings,
		betAmount: 0,				
		winnerId: null		
	}

	return currentRace

}