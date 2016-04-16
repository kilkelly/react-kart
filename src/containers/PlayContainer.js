"use strict"

import { connect } from "react-redux"
import Play from "../components/Play"

function mapStateToProps(state, ownProps) {
	return {
		currentRace: state.currentRace
	}
}

function mapDispatchToActions(dispatch) {
	return {}	
}

export default connect(
	mapStateToProps
)(Play)
