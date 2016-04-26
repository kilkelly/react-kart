"use strict"

import { connect } from "react-redux"
import { startRace } from "../ducks/currentRace"
import CreateBet from "../components/CreateBet"

function mapStateToProps(state, ownProps) {	

	return {
		user: state.user.toJS(),
		previousRaceId:
			state.raceLog.size > 0 
			? state.raceLog.first().toJS().raceId
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
