"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const KartSelectedStats = React.createClass({
	
	render: function() {

		let selectedKartName = ""		

		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
			if (this.props.karts[i].selected) {
				selectedKartName = this.props.karts[i].name	
			}
		}

		return (
			<div>
				{
					selectedKartName 
					? <div className={styles.message}>You have selected <span className={styles.selected}>{selectedKartName}</span></div>
					: ""
				}
			</div>
		)
	}

})

export default KartSelectedStats