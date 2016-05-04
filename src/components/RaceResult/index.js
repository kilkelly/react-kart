"use strict"

import React from "react"

import { 
	calculateWinnings,
	calculateLoss
} from "../../ducks/karts"

import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceResult = React.createClass({

	_nextRace: function() {		
		this.props.resetRace()
	},

	render: function() {

		// did user win their bet
		let betWin = this.props.currentRace.winnerId === this.props.user.selectedKart

		return (
			<div id={styles.wrapper}>
				{
					this.props.currentRace.winnerId

					? <div id={styles.panel}>
						<div>
							Winner is {this.props.karts[this.props.currentRace.winnerId].name}!
						</div>					
						<div>
							You 
							{
								betWin
								? <span> <span className="win">won</span> your bet :)</span>
								: <span> <span className="lose">lost</span> your bet :(</span>
							}
						</div>
						<div>
							Your new coin balance is <span className="coinBalance">{this.props.user.balance}</span>
							{
								betWin								
								? <span> (<span className="win">+{
									calculateWinnings(
										this.props.karts[this.props.user.selectedKart],
										this.props.currentRace.betAmount,
										true
									)
									}</span>)</span>
								: <span> (<span className="lose">-{
									calculateLoss(
										this.props.karts[this.props.user.selectedKart],
										this.props.currentRace.betAmount,
										true
									)
									}</span>)</span>
							}
						</div>						
						<div>
							<button id={styles.nextRace} onClick={this._nextRace}>Next Race</button>
						</div>
					</div>

					: "Race in progress..."
				}
			</div>
		)

	}

})

export default RaceResult