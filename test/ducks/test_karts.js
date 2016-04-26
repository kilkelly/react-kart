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
			expectedState = expectedState.setIn([kartId.toString(), "wins"], expectedState.getIn([kartId.toString(), "wins"]) + 1)
			//*

			const nextState = reducer(prevState, winsIncrementKart(kartId))

			expect(nextState).to.equal(expectedState)
		})
	})	

	//--------------------------------------------------------

	describe("losses", () => {
		it("incremented", () => {		

			const prevState = clone(initialState)

			//** create expected karts to see after action takes place
			let expectedState = clone(initialState)
			expectedState = expectedState.setIn([kartId.toString(), "losses"], expectedState.getIn([kartId.toString(), "losses"]) + 1)
			//*

			const nextState = reducer(prevState, lossesIncrementKart(kartId))
						
			expect(nextState).to.equal(expectedState)
		})				
	})	

	//--------------------------------------------------------

	describe("movement", () => {
		it("kart moved", () => {			

			const prevState = clone(initialState)
			const nextState = reducer(prevState, moveKart(kartId))			

			expect(nextState.getIn([kartId.toString(), "distance"])).to.equal(MOVE_KART_DISTANCE)
		})

		//--------------------------------------------------------

		it("all karts moved back to start", () => {			

			let prevState = clone(initialState)
			
			//** set some distances for karts in order to see if they are reset
			// correctly after the reducer action
			prevState = prevState.map(kart => kart.set("distance", 22))
			//*

			const nextState = reducer(prevState, moveKartsToStart())			
			
			for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
				expect(nextState.getIn([i.toString(), "distance"])).to.equal(0)
			}
			//*		

		})

	})			

})