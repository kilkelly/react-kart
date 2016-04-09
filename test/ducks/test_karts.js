"use strict"

import { expect } from "chai"
import clone from "clone"
import reducer,	{
		winsIncrement,
		lossesIncrement,
		selectKart,
		createInitialKarts,		// used for testing purposes
		selectKartWithinKarts,		// used for testing purposes
		NUMBER_OF_KARTS
	}
	from "../../src/ducks/karts"

const initialKarts = createInitialKarts(NUMBER_OF_KARTS)		
const kartId = 1 // kart to test with

//--------------------------------------------------------------------------------

describe('"karts" reducer', () => {

	describe("wins", () => {
		it("incremented", () => {
						
			const prevKarts = clone(initialKarts)

			//* create expected karts to see after action takes place
			let expectedKarts = clone(initialKarts)
			expectedKarts[kartId - 1].wins = expectedKarts[kartId - 1].wins + 1
			//*

			const nextKarts = reducer(prevKarts, winsIncrement(kartId))

			expect(nextKarts).to.deep.equal(expectedKarts)
		})
	})	

	//--------------------------------------------------------

	describe("losses", () => {
		it("incremented", () => {		

			const prevKarts = clone(initialKarts)

			//* create expected karts to see after action takes place
			let expectedKarts = clone(initialKarts)
			expectedKarts[kartId - 1].losses = expectedKarts[kartId - 1].losses + 1
			//*

			const nextKarts = reducer(prevKarts, lossesIncrement(kartId))
						
			expect(nextKarts).to.deep.equal(expectedKarts)
		})				
	})	

	//--------------------------------------------------------

	describe("selection", () => {
		it("correct kart selected", () => {		
			
			const prevKarts = clone(initialKarts)

			//* create expected karts to see after action takes place			
			let expectedKarts = clone(initialKarts)
			expectedKarts = selectKartWithinKarts(expectedKarts, 1)
			//*

			const nextKarts = reducer(prevKarts, selectKart(kartId)) // select kart with the Id of 1
			
			expect(nextKarts).to.deep.equal(expectedKarts)
		})

	})

})