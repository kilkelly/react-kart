"use strict"

import { connect } from "react-redux"
import { resetRace } from "../ducks/currentRace"
import { moveKartsToStart } from "../ducks/karts"
import Play from "../components/Play"

function mapStateToProps(state, ownProps) {
	return {
		currentRace: state.currentRace
	}
}

function mapDispatchToActions(dispatch) {
	return {
		resetRace: () => dispatch(resetRace()),
		moveKartsToStart: () => dispatch(moveKartsToStart()),
	}	
}

export default connect(
	mapStateToProps,
	mapDispatchToActions
)(Play)
