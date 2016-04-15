"use strict"

import { connect } from "react-redux"
import { selectKart } from "../ducks/karts"
import KartSelectArea from "../components/KartSelectArea"

function mapStateToProps(state, ownProps) {
	return {
		karts: state.karts
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		selectKart: kartId => {			
			dispatch(selectKart(kartId))
		}
	}
}

export default connect(	
	mapStateToProps,
	mapDispatchToProps
)(KartSelectArea)
