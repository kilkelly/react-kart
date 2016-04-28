"use strict"

import React from "react"

import { 
	calculateWinnings,
	calculateLoss
} from "../../ducks/karts"

import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceResult = React.createClass({

	componentWillUnmount: function() {		
		this.props.resetRace()		
	},

	_nextRace: function() {		
		this.props.resetRace()
		this.props.moveKartsToStart()
	},

	render: function() {

		// did user win their bet
		let betWin = this.props.currentRace.winnerId === this.props.user.selectedKart

		return (
			<div>
				{
					this.props.currentRace.winnerId

					? <div>
						<div>
							Winner is {this.props.karts[this.props.currentRace.winnerId].name}!
						</div>					
						<div>
							You 
							{
								betWin
								? <span> <span className={styles.won}>won</span> your bet :)</span>
								: <span> <span className={styles.lost}>lost</span> your bet :(</span>
							}
						</div>
						<div>
							Your new coin balance is {this.props.user.balance}
							{
								betWin								
								? <span> (<span className={styles.won}>+{
									calculateWinnings(
										this.props.karts[this.props.user.selectedKart],
										this.props.currentRace.betAmount,
										true
									)
									}</span>)</span>
								: <span> (<span className={styles.lost}>-{
									calculateLoss(
										this.props.karts[this.props.user.selectedKart],
										this.props.currentRace.betAmount,
										true
									)
									}</span>)</span>
							}
						</div>						
						<div>
							<button onClick={this._nextRace}>Next Race</button>
						</div>
					</div>

					: ""
				}
			</div>
		)

	}

})

export default RaceResult