"use strict"

import { connect } from "react-redux"
import { setSelectedKart } from "../ducks/user"
import KartSelect from "../components/KartSelect"

function mapStateToProps(state, ownProps) {
	return {		
		karts: state.karts,
		user: state.user
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setSelectedKart: kartId => {			
			dispatch(setSelectedKart(kartId))
		}
	}
}

export default connect(	
	mapStateToProps,
	mapDispatchToProps
)(KartSelect)
