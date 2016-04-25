"use strict"

import { connect } from "react-redux"
import RaceLog from "../components/RaceLog"

function mapStateToProps(state, ownProps) {
	return {		
		karts: state.karts.toJS(),
		raceLog: state.raceLog.toJS()
	}
}

export default connect(	
	mapStateToProps
)(RaceLog)
