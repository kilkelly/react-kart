"use strict"

import React from "react"
import { RACE_LOG_SIZE } from "../../core/constants"
import styles from "./styles.scss"
import RaceLogEntry from "../RaceLogEntry"

import Reduxify from "../../reduxify"


// -------------------------------------------------------------------------------
const RaceLog = React.createClass({

	render: function() {

		return (
			<Reduxify>
				{(state, dispatch) => 
					<div>
						<p>Your last {RACE_LOG_SIZE} races:</p>
						{
						
						state.raceLog.toJS().length > 0

						? state.raceLog.toJS().map((entry, index) => {
							return <RaceLogEntry key={index} entry={entry} karts={state.karts.toJS()}/>
						})

						: <p>No races yet!</p> 

						}
					</div>
				}
			</Reduxify>			
		)

	}

})

export default RaceLog