"use strict"

import { connect } from "react-redux"
import { resetRace } from "../ducks/currentRace"
import { moveKartsToStart } from "../ducks/karts"
import RaceResult from "../components/RaceResult"

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		currentRace: state.currentRace,
		karts: state.karts
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		resetRace: () => {dispatch(resetRace())},
		moveKartsToStart: () => {dispatch(moveKartsToStart())}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RaceResult)
