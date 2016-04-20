"use strict"

import { expect } from "chai"
import clone from "clone"

import { NUMBER_OF_KARTS } from "../../src/core/constants"

import logRaceReducer,	{ logRace } from "../../src/ducks/raceLog"

import currentRaceReducer, { 
	resetRace,
	startRace,
	endRace,
	updateRankings,
	resetCurrentRace		// used for testing purposes
} from "../../src/ducks/currentRace"

import kartsReducer, { createKarts } from "../../src/ducks/karts"
import userReducer, { createUser, setSelectedKart } from "../../src/ducks/user"

const kartId = 1 // arbirary number, just for testing purposes
const raceId = 15 // arbirary number, just for testing purposes
const betAmount = 80 // arbirary number, just for testing purposes
const betResult = 100 // arbirary number, just for testing purposes
const odds = "8/3" // arbirary number, just for testing purposes


describe('"raceLog" reducer', () => {

	//**
	let user = createUser()
	user = userReducer(user, setSelectedKart(kartId))

	//**
	let karts = createKarts(NUMBER_OF_KARTS, true)

	//**
	let currentRace = {}
	currentRace = currentRaceReducer(resetCurrentRace(NUMBER_OF_KARTS), resetRace())			
	currentRace = currentRaceReducer(currentRace, startRace(raceId, betAmount))			
	currentRace = currentRaceReducer(currentRace, updateRankings(karts))			
	const completedRace = currentRaceReducer(currentRace, endRace(kartId))			

	//**
	const race = {
		raceId: completedRace.currentRaceId,
		results: completedRace.rankings,
		selectedKart: user.selectedKart,
		betResult,
		odds
	}		

	console.log(race)	

	describe("one race", () => {
		it("logged successfully", () => {

			const raceLog = logRaceReducer([], logRace(race))			

			expect(raceLog.length).to.equal(1)

		})

	})

	//--------------------------------------------------------

	describe("multiple races", () => {

		it("logged successfully", () => {

			let raceLog = []
			const numRacesToLog = 4

			for (let i = 0; i < numRacesToLog; i = i + 1) {
				raceLog = logRaceReducer(raceLog, logRace(race))			
			}

			expect(raceLog.length).to.equal(numRacesToLog)

		})

	})	
				

})