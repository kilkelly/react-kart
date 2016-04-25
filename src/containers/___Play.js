"use strict"

import { connect } from "react-redux"
import { resetRace } from "../ducks/currentRace"
import { moveKartsToStart } from "../ducks/karts"
import { setSelectedKart } from "../ducks/user"
import Play from "../components/Play"

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		karts: state.karts,
		currentRace: state.currentRace
	}
}

function mapDispatchToActions(dispatch) {
	return {
		setSelectedKart: (kartId) => dispatch(setSelectedKart(kartId)),
		resetRace: () => dispatch(resetRace()),
		moveKartsToStart: () => dispatch(moveKartsToStart()),
	}	
}

export default connect(
	mapStateToProps,
	mapDispatchToActions
)(Play)
