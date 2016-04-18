"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import ___KartSelect from "../../containers/___KartSelect"
import ___KartSelectedStats from "../../containers/___KartSelectedStats"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceSetup = React.createClass({
	
	render: function() {

		return (
			<div className={styles.table}>
				<div className={styles.cell}>	

					<___KartSelect />

				</div>
				<div className={styles.cell}>

					<___KartSelectedStats />					

				</div>
			</div>		
		)
	}

})

export default RaceSetup