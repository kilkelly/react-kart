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
			for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1 ) {
				karts[i].distance = i * 10
			}
			//*
			
			const nextState = reducer(initialState, updateRankings(karts))

			//**
			//	rankings should be as follows
			//	#1 = kartid 3 = distance 30 
			//	#2 = kartid 2 = distance 20 
			//	#3 = kartid 1 = distance 10 

			for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
				expect(nextState.rankings[i].kartId).to.equal((NUMBER_OF_KARTS + 1) - i)
			}			

		})
	})	
				

})