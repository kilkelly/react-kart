"use strict"

import { expect } from "chai"
import clone from "clone"
import { 
	NUMBER_OF_KARTS,
	MOVE_KART_DISTANCE
} from "../../src/core/constants"

import reducer,	{
	winsIncrementKart,
	lossesIncrementKart,
	moveKart,
	moveKartsToStart,		
	createKarts,		// used for testing purposes
}
from "../../src/ducks/karts"

const initialState = createKarts(NUMBER_OF_KARTS, true)
const kartId = 1 // kart to test with

//--------------------------------------------------------------------------------

describe('"karts" reducer', () => {

	describe("wins", () => {
		it("incremented", () => {
						
			const prevState = clone(initialState)

			//** create expected karts to see after action takes place
			let expectedState = clone(initialState)
			expectedState[kartId].wins = expectedState[kartId].wins + 1
			//*

			const nextState = reducer(prevState, winsIncrementKart(kartId))

			expect(nextState).to.deep.equal(expectedState)
		})
	})	

	//--------------------------------------------------------

	describe("losses", () => {
		it("incremented", () => {		

			const prevState = clone(initialState)

			//** create expected karts to see after action takes place
			let expectedState = clone(initialState)
			expectedState[kartId].losses = expectedState[kartId].losses + 1
			//*

			const nextState = reducer(prevState, lossesIncrementKart(kartId))
						
			expect(nextState).to.deep.equal(expectedState)
		})				
	})	

	//--------------------------------------------------------

	describe("movement", () => {
		it("kart moved", () => {			

			const prevState = clone(initialState)
			const nextState = reducer(prevState, moveKart(kartId))			

			expect(nextState[kartId].distance).to.equal(MOVE_KART_DISTANCE)
		})

		//--------------------------------------------------------

		it("all karts moved back to start", () => {			

			const prevState = clone(initialState)
			
			//** set some distances for karts in order to see if they are reset
			// correctly after the reducer action
			for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
				prevState[i].distance = 22
			}
			//*

			const nextState = reducer(prevState, moveKartsToStart())			

			//** create expected kart distances to see after reset action takes place
			let expectedKartDistances = {}			
			for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
				expect(nextState[i].distance).to.equal(0)
			}
			//*		

		})

	})			

})