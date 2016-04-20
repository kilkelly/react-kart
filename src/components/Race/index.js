"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import ___RaceTrack from "../../containers/___RaceTrack"
import RaceResult from "../RaceResult"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const Race = React.createClass({

	render: function() {

		return (
			<div className={styles.table}>
				<div className={styles.cell}>	

					<___RaceTrack />

				</div>
				<div className={styles.cell}>

					<RaceResult />

				</div>
			</div>		
		)

	}

})

export default Race