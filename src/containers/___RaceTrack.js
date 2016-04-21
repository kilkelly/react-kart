"use strict"

import { connect } from "react-redux"
import { winsIncrementUser, lossesIncrementUser, balanceAdd, balanceSubtract } from "../ducks/user"
import { moveKart, winsIncrementKart, lossesIncrementKart } from "../ducks/karts"
import { endRace } from "../ducks/currentRace"
import RaceTrack from "../components/RaceTrack"

function mapStateToProps(state, ownProps) {
	return {
		karts: state.karts,
		user: state.user,
		currentRace: state.currentRace


	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		endRace: (winner) => {	dispatch(endRace(winner)) },
		moveKart: (kartId) => {	dispatch(moveKart(kartId)) },
		winsIncrementUser: () => {	dispatch(winsIncrementUser()) },
		lossesIncrementUser: () => {	dispatch(lossesIncrementUser()) },
		winsIncrementKart: (kartId) => {	dispatch(winsIncrementKart(kartId)) },		
		lossesIncrementKart: (kartId) => {	dispatch(lossesIncrementKart(kartId)) },		
		balanceAdd: (betAmount) => {	dispatch(balanceAdd(betAmount)) },
		balanceSubtract: (betAmount) => {	dispatch(balanceSubtract(betAmount)) }
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RaceTrack)
