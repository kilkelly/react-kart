"use strict"

import { connect } from "react-redux"
import { selectKart } from "../ducks/karts"
import KartSelectedStats from "../components/KartSelectedStats"

function mapStateToProps(state, ownProps) {
	return {
		user: state.user,
		karts: state.karts
	}
}

export default connect(	
	mapStateToProps
)(KartSelectedStats)
