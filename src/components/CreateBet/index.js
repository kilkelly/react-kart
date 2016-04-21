"use strict"

import React from "react"
import ReactDOM from "react-dom"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const CreateBet = React.createClass({

	getInitialState: function() {
		return {
			initialBet: 10,
			invalidBet: false
		}
	},

	// -------------------------------------------------------------------------------

	_startRace: function() {

		let betAmount = +ReactDOM.findDOMNode(this.refs.betAmount).value 	

		this.props.startRace(79, betAmount)
	},

	// -------------------------------------------------------------------------------

	_validateBet: function() {

		// plus sign (+) converts from string to number
		let betAmount = +ReactDOM.findDOMNode(this.refs.betAmount).value 	

		if (typeof betAmount === "number" 
				&& betAmount > 0
				&& betAmount <= this.props.user.balance) {	// valid
			this.setState({
				invalidBet: false
			})
		} else {	// invalid
			this.setState({
				invalidBet: true
			})
		}
	},	

	// -------------------------------------------------------------------------------

	render: function() {

		return (
			<div>
				{
					this.props.user.selectedKart

					? <div>
						<div>Coin Balance: {this.props.user.balance}</div>
						<div>
							Enter Bet 
							<input 
								ref="betAmount"
								type="text"
								id={styles.betAmount}
								defaultValue={this.state.initialBet}
								onChange={this._validateBet}/>							
						</div>
						<div>
							{this.state.invalidBet	? <span>Invalid bet amount, enter 1 - {this.props.user.balance}</span> : ""}
						</div>
						<div>
							<button onClick={this._startRace} disabled={this.state.invalidBet}>
								Start Race!
							</button>
						</div>
					</div>

					: ""
				}
			</div>	
		)

	}

})

export default CreateBet