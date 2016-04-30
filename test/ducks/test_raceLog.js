"use strict"

import { expect } from "chai"
import clone from "clone"

import { NUMBER_OF_KARTS } from "../../src/core/constants"

import logRaceReducer,	{ logRace, createRaceLog } from "../../src/ducks/raceLog"

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
	let karts = createKarts(NUMBER_OF_KARTS, true).toJS()

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

	describe("one race", () => {
		it("logged successfully", () => {

			let raceLog = logRaceReducer(createRaceLog(), logRace(race))			

			expect(raceLog.size).to.equal(1)

		})

	})

	//--------------------------------------------------------

	describe("multiple races", () => {

		it("logged successfully", () => {

			let raceLogFirstRace = logRaceReducer(createRaceLog(), logRace(race))
			let raceLogSecondRace = logRaceReducer(raceLogFirstRace, logRace(race))

			expect(raceLogSecondRace.size).to.equal(2)

		})

	})	
				

})