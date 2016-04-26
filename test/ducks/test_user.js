"use strict"

import { expect } from "chai"

import reducer,	{
	winsIncrementUser,
	lossesIncrementUser,
	balanceAdd,
	balanceSubtract,
	racesIncrement,
	setSelectedKart,
	createUser
}
from "../../src/ducks/user"


const initialState = createUser()
const kartId = 6 // kart to test with


describe('"user" reducer', () => {

	describe("wins", () => {
		it("incremented", () => {
			const nextState = reducer(initialState, winsIncrementUser())
			const expectedState = initialState.set("wins", 1)

			expect(nextState).to.equal(expectedState)
		})
	})	

	//--------------------------------------------------------

	describe("losses", () => {
		it("incremented", () => {
			const nextState = reducer(initialState, lossesIncrementUser())
			const expectedState = initialState.set("losses", 1)
			
			expect(nextState).to.equal(expectedState)
		})				
	})	

	//--------------------------------------------------------

	describe("balance", () => {
		it("added to", () => {			
			const nextState = reducer(initialState, balanceAdd(50))
			const expectedState = initialState.set("balance", 300)

			expect(nextState).to.equal(expectedState)
		})

		it("subtracted from", () => {
			let amendedState = initialState.set("balance", 100)
			const nextState = reducer(amendedState, balanceSubtract(10))
			const expectedState = initialState.set("balance", 90)
			
			expect(nextState).to.equal(expectedState)
		})			

		it("when subtracted from it never leaves you with a balance below 10", () => {
			const nextState = reducer(initialState, balanceSubtract(250))
			const expectedState = initialState.set("balance", 10)

			expect(nextState).to.equal(expectedState)
		})			

	})			

	//--------------------------------------------------------

	describe("races", () => {
		it("incremented", () => {
			const nextState = reducer(initialState, racesIncrement())
			const expectedState = initialState.set("races", 1)

			expect(nextState).to.equal(expectedState)
		})				
	})	

	//--------------------------------------------------------

	describe("kart selection", () => {
		it("kart selection set correctly", () => {		
			
			const nextState = reducer(initialState, setSelectedKart(kartId)) // select kart which has the supplied Id
			
			expect(nextState.get("selectedKart")).to.equal(kartId)
		})

	})	

})