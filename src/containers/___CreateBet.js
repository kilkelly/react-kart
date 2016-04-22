"use strict"

import { connect } from "react-redux"
import { startRace } from "../ducks/currentRace"
import CreateBet from "../components/CreateBet"

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		previousRaceId:
			state.raceLog.length > 0 
			? state.raceLog[0].raceId
			: 0
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		startRace : (raceId, betAmount) => {
			dispatch(startRace(raceId, betAmount))
		}
	}
}

export default connect(	
	mapStateToProps,
	mapDispatchToProps
)(CreateBet)
