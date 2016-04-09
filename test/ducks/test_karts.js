"use strict"

import { expect } from "chai"
import clone from "clone"
import { NUMBER_OF_KARTS } from "../core/constants"
import reducer,	{
		winsIncrement,
		lossesIncrement,
		selectKart,
		createInitialKarts,		// used for testing purposes
		selectKartWithinKarts		// used for testing purposes
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
			expectedKarts[kartId].wins = expectedKarts[kartId].wins + 1
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
			expectedKarts[kartId].losses = expectedKarts[kartId].losses + 1
			//*

			const nextKarts = reducer(prevKarts, lossesIncrement(kartId))
						
			expect(nextKarts).to.deep.equal(expectedKarts)
		})				
	})	

	//--------------------------------------------------------

	describe("selection", () => {
		it("correct kart selected", () => {		
			
			const prevKarts = clone(initialKarts)
			const nextKarts = reducer(prevKarts, selectKart(kartId)) // select kart which has the supplied Id
			
			expect(nextKarts[kartId].selected).to.equal(true)
		})

		it("only one kart can be selected at a time", () => {		
			
			const prevKarts = clone(initialKarts)
			const nextKarts = reducer(prevKarts, selectKart(kartId)) // select kart which has the supplied Id
			
			const numOfSelectedKarts = Object.keys(nextKarts).filter(
				kart => nextKarts[kart].selected === true
			).length

			const numOfUnselectedKarts = Object.keys(nextKarts).filter(
				kart => nextKarts[kart].selected === false
			).length			

			expect(numOfSelectedKarts).to.equal(1)
			expect(numOfUnselectedKarts).to.equal(NUMBER_OF_KARTS - 1)
		})		

	})

})