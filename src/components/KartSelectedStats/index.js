"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import { lucky } from "../../ducks/karts"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const KartSelectedStats = ({ selectedKart }) => {
	
	return (
		<div>
			{
				(selectedKart)
				? <div className={styles.message}>
					<div>
						<span className={styles.selected}>{selectedKart.name}</span>
					</div>
					<div>Wins: {selectedKart.wins} Losses: {selectedKart.losses}</div>													
					<div>Lucky: {lucky(selectedKart.wins, selectedKart.losses)}% of the time</div>													
				</div>
				: ""
			}
		</div>
	)	

}


export default KartSelectedStats

