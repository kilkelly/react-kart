"use strict"

import { expect } from "chai"
import clone from "clone"

import { NUMBER_OF_KARTS } from "../../src/core/constants"

import reducer,	{
	startRace,
	endRace,		
	resetRace,
	updateRankings,
	resetCurrentRace		// used for testing purposes
} from "../../src/ducks/currentRace"

import { createKarts } from "../../src/ducks/karts"


const initialState = resetCurrentRace(NUMBER_OF_KARTS)
const kartId = 1 		// arbirary number, just for testing purposes
const raceId = 15 		// arbirary number, just for testing purposes
const betAmount = 80 		// arbirary number, just for testing purposes

describe('"currentRace" reducer', () => {

	describe("race", () => {
		it("started", () => {
			const nextState = reducer(initialState, startRace(raceId, betAmount))			

			expect(nextState.get("currentRaceId")).to.equal(raceId)
			expect(nextState.get("inProgress")).to.equal(true)
			expect(nextState.get("betAmount")).to.equal(betAmount)
		})

		//--------------------------------------------------------

		it("ended and winner crowned", () => {

			//**
			const prevState = clone(initialState)
			prevState.set("inProgress", true)
			prevState.set("winnerId", null)
			//*

			const nextState = reducer(prevState, endRace(kartId))			
			
			expect(nextState.get("inProgress")).to.equal(false)
			expect(nextState.get("winnerId")).to.equal(kartId)
		})

		//--------------------------------------------------------

		it("reset", () => {

			const nextState = reducer(initialState, resetRace())						

			expect(nextState.get("currentRaceId")).to.equal(null)		
			expect(nextState.get("inProgress")).to.equal(false)
			expect(nextState.get("betAmount")).to.equal(0)
			expect(nextState.get("winnerId")).to.equal(null)
		})								
	})		

	describe("rankings", () => {
		it("updated successfully", () => {

			//** create karts and set their distances to test rankings
			// format
			//	{
			//		{ name: "kart1" . . . distance: 10 . . . }	
			//		{ name: "kart2" . . . distance: 20 . . . }	
			//		{ name: "kart3" . . . distance: 30 . . . }	
			//	}
			
			let karts = createKarts(NUMBER_OF_KARTS, true)
			karts = karts.map((kart, i) => kart.set("distance", i * 10))

			//*

			const nextState = reducer(initialState, updateRankings(karts.toJS()))

			//**
			//	rankings should be as follows
			//	#1 = kartid 3 = distance 30 
			//	#2 = kartid 2 = distance 20 
			//	#3 = kartid 1 = distance 10 			

			for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
				expect(nextState.getIn(["rankings", i.toString(), "kartId"])).to.equal((NUMBER_OF_KARTS + 1) - i)
			}			

		})
	})	
				

})