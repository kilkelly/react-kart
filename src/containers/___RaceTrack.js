"use strict"

import { connect } from "react-redux"
import { winsIncrementUser, lossesIncrementUser, balanceAdd, balanceSubtract } from "../ducks/user"
import { moveKart, winsIncrementKart, lossesIncrementKart } from "../ducks/karts"
import { updateRankings, endRace } from "../ducks/currentRace"
import { logRace } from "../ducks/raceLog"
import RaceTrack from "../components/RaceTrack"

function mapStateToProps(state, ownProps) {
	return {
		karts: state.karts.toJS(),
		user: state.user,
		currentRace: state.currentRace.toJS()
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		updateRankings: (karts) => {dispatch(updateRankings(karts))},
		endRace: (winnerId) => {dispatch(endRace(winnerId))},
		moveKart: (kartId) => {dispatch(moveKart(kartId))},
		winsIncrementUser: () => {dispatch(winsIncrementUser())},
		lossesIncrementUser: () => {dispatch(lossesIncrementUser())},
		winsIncrementKart: (kartId) => {dispatch(winsIncrementKart(kartId))},		
		lossesIncrementKart: (kartId) => {dispatch(lossesIncrementKart(kartId))},
		balanceAdd: (betAmount) => {dispatch(balanceAdd(betAmount))},
		balanceSubtract: (betAmount) => {dispatch(balanceSubtract(betAmount))},		
		logRace: (race) => {dispatch(logRace(race))}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RaceTrack)
