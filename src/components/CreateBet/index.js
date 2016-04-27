"use strict"

import React from "react"
import ReactDOM from "react-dom"

import { 
	calculateWinnings,
	calculateLoss
} from "../../ducks/karts"

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

	componentDidMount: function() {

		// if user has selected a kart update the win/loss projections
		if (this.props.user.selectedKart) {
			this._updateWinLossProjections(this.state.initialBet)
		}

	},

	// -------------------------------------------------------------------------------

	componentDidUpdate: function(prevProps) {

		let betAmount = +ReactDOM.findDOMNode(this.refs.betAmount).value 	

		// if user has selected a different kart update the win/loss projections
		if (this.props.user.selectedKart &&
			this.props.user.selectedKart !== prevProps.user.selectedKart) {
			this._updateWinLossProjections(betAmount)
		}

	},	

	// -------------------------------------------------------------------------------

	_startRace: function() {

		let betAmount = +ReactDOM.findDOMNode(this.refs.betAmount).value 	
		let raceId = this.props.previousRaceId + 1

		this.props.startRace(raceId, betAmount)
	},

	// -------------------------------------------------------------------------------

	//** Check whether user entered a valid bet amount
	_betChanged: function() {

		let invalidBet
		let betAmount = +ReactDOM.findDOMNode(this.refs.betAmount).value 	

		// invalid bet amount
		if (typeof betAmount !== "number" 
				|| betAmount <= 0
				|| betAmount > this.props.user.balance) {			
			invalidBet = true
		}
		// valid bet amount
		else {

			this._updateWinLossProjections(betAmount)

		}		



		// reflect values in state
		this.setState({
			invalidBet
		})

	},	

	// -------------------------------------------------------------------------------

	/**
		Updates the win/loss projections for the selected kart
	*/
	_updateWinLossProjections: function() {

		// plus sign (+) converts from string to number
		let betAmount = +ReactDOM.findDOMNode(this.refs.betAmount).value 			
		let projectedWinnings = null
		let projectedLoss = null

		// calculate projected winnings
		projectedWinnings = calculateWinnings(this.props.karts[this.props.user.selectedKart], betAmount)

		// calculate projected winnings
		projectedLoss = calculateLoss(this.props.karts[this.props.user.selectedKart], betAmount)

		// reflect values in state
		this.setState({
			projectedWinnings,
			projectedLoss
		})										

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
							Enter Bet:  
							<input 
								ref="betAmount"
								type="text"
								id={styles.betAmount}
								defaultValue={this.state.initialBet}
								onChange={this._betChanged}/> Coins							
						</div>
						<div>
							{this.state.projectedWinnings ? <span>Projected Winnings: {this.state.projectedWinnings}</span> : ""}
						</div>						
						<div>
							{this.state.projectedLoss ? <span>Projected Loss: {this.state.projectedLoss}</span> : ""}							
						</div>								
						<div>
							{this.state.invalidBet ? <span>Invalid bet amount, enter 1 - {this.props.user.balance}</span> : ""}
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