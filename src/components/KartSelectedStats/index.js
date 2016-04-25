"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
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
					<div>Lucky Index: {_calculateLuckyIndex(selectedKart)}%</div>													
				</div>
				: ""
			}
		</div>
	)	

}

/**
	Calculates how lucky this kart is in percentage terms
	@kartId - id of kart to calculate lucky index for
*/
function _calculateLuckyIndex(kart) {	
	// prevent division by zero
	if (kart.wins + kart.losses !== 0) {
		return Math.floor(kart.wins * 100 / (kart.wins + kart.losses))
	} else {
		return 0
	}
	
}

export default KartSelectedStats

