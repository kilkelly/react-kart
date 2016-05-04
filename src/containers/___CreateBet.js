"use strict"

import { connect } from "react-redux"
import { resetRace, startRace } from "../ducks/currentRace"
import { moveKartsToStart } from "../ducks/karts"
import CreateBet from "../components/CreateBet"

function mapStateToProps(state, ownProps) {	

	return {
		user: state.user.toJS(),
		karts: state.karts.toJS(),
		previousRaceId:
			state.raceLog.size > 0 
			? state.raceLog.first().toJS().raceId
			: 0
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		resetRace : () => dispatch(resetRace()),
		moveKartsToStart : () => dispatch(moveKartsToStart()),
		startRace : (raceId, betAmount) => dispatch(startRace(raceId, betAmount))
	}
}

export default connect(	
	mapStateToProps,
	mapDispatchToProps
)(CreateBet)
