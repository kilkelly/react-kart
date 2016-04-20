"use strict"

import { connect } from "react-redux"
import { selectKart } from "../ducks/user"
import Navigation from "../components/Navigation"

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}

export default connect(	
	mapStateToProps
)(Navigation)
