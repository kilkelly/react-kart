"use strict"

import React from "react"
import clone from "clone"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceResult = React.createClass({

	_nextRace: function() {		

		this.props.logRace({
			raceId: this.props.currentRace.currentRaceId,
			results: clone(this.props.currentRace.rankings),
			selectedKart: this.props.user.selectedKart,

			betResult: 	this.props.currentRace.winnerId === this.props.user.selectedKart
						? this.props.currentRace.betAmount
						: -this.props.currentRace.betAmount,

			odds: 0			

		})		

		this.props.moveKartsToStart()		
		this.props.resetRace()
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
								? <span> (<span className={styles.won}>+{this.props.currentRace.betAmount}</span>)</span>
								: <span> (<span className={styles.lost}>-{this.props.currentRace.betAmount}</span>)</span>
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