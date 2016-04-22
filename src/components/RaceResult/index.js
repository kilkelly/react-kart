"use strict"

import React from "react"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceResult = React.createClass({

	_nextRace: function() {		
		this.props.moveKartsToStart()
		this.props.resetRace()
	},

	render: function() {

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
								this.props.currentRace.winnerId === this.props.user.selectedKart
								? <span> <span className={styles.won}>won</span> your bet :)</span>
								: <span> <span className={styles.lost}>lost</span> your bet :(</span>
							}
						</div>
						<div>
							Your new coin balance is {this.props.user.balance}
							{
								this.props.currentRace.winnerId === this.props.user.selectedKart								
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