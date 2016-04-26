"use strict"

import { connect } from "react-redux"
import App from "../components/App"

function mapStateToProps(state, ownProps) {

	return {
		balance: state.user.get("balance"),
		wins: state.user.get("wins"),
		losses: state.user.get("losses"),
	}
}

export default connect(
	mapStateToProps
)(App)

