"use strict"

import { connect } from "react-redux"
import App from "../components/App"

function mapStateToProps(state, ownProps) {

	return {
		balance: state.user.balance,
		wins: state.user.wins,
		losses: state.user.losses
	}
}

export default connect(
	mapStateToProps
)(App)

