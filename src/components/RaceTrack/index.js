"use strict"

import React from "react"
import { NUMBER_OF_KARTS, RACE_DISTANCE } from "../../core/constants"
import RaceLine from "../RaceLine"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceTrack = React.createClass({

	render: function() {

		let raceLines = []

		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {	
			raceLines.push(			
				<RaceLine
					kartImage={this.props.karts[i].image}					
					distanceTraveled="0"
					distanceTotal={RACE_DISTANCE} />
			)		
		}

		return (		
			<div>
				{raceLines}
			</div>	
		)

	}

})

export default RaceTrack