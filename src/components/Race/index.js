"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import ___RaceTrack from "../../containers/___RaceTrack"
import ___RaceResult from "../../containers/___RaceResult"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const Race = React.createClass({

	render: function() {

		return (
			<div>
				<div className={styles.table}>
					<div className={styles.cell}>	

						<___RaceTrack />

					</div>
					<div className={styles.cell}>

						<___RaceResult />

					</div>
				</div>
			</div>			
		)

	}

})

export default Race