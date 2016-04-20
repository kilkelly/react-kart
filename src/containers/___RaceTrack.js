"use strict"

import { connect } from "react-redux"
import RaceTrack from "../components/RaceTrack"

function mapStateToProps(state, ownProps) {
	return {
		karts: state.karts
	}
}

export default connect(
	mapStateToProps
)(RaceTrack)
