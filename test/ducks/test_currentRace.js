"use strict"

import { expect } from "chai"
import clone from "clone"

import { NUMBER_OF_KARTS } from "../../src/core/constants"

import reducer,	{
	startRace,
	endRace,		
	resetRace,
	resetCurrentRace,		// used for testing purposes
} from "../../src/ducks/currentRace"


const initialState = resetCurrentRace(NUMBER_OF_KARTS)
const kartId = 1 // arbirary number, just for testing purposes
const raceId = 15 // arbirary number, just for testing purposes
const betAmount = 80 // arbirary number, just for testing purposes

describe('"currentRace" reducer', () => {

	describe("race", () => {
		it("started", () => {
			const nextState = reducer(initialState, startRace(raceId, betAmount))			

			expect(nextState.currentRaceId).to.equal(raceId)
			expect(nextState.inProgress).to.equal(true)
			expect(nextState.betAmount).to.equal(betAmount)
		})

		//--------------------------------------------------------

		it("ended and winner crowned", () => {

			//**
			const prevState = clone(initialState)
			prevState.inProgress = true
			prevState.winnerId = null
			//*

			const nextState = reducer(prevState, endRace(kartId))			
			
			expect(nextState.inProgress).to.equal(false)
			expect(nextState.winnerId).to.equal(kartId)
		})

		//--------------------------------------------------------

		it("reset", () => {

			const nextState = reducer(initialState, resetRace())						

			expect(nextState.currentRaceId).to.equal(null)		
			expect(nextState.inProgress).to.equal(false)
			expect(nextState.betAmount).to.equal(0)
			expect(nextState.winnerId).to.equal(null)
		})								
	})		

})