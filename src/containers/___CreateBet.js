"use strict"

import { connect } from "react-redux"
import { selectKart } from "../ducks/user"
import CreateBet from "../components/CreateBet"

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}

export default connect(	
	mapStateToProps
)(CreateBet)
