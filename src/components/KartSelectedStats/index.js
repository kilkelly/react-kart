"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import { lucky } from "../../ducks/karts"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const KartSelectedStats = ({ selectedKart }) => {
	
	return (
		<div id={styles.wrapper}>
			{
				(selectedKart)
				? <div id={styles.panel}>
					<div>You have selected</div>													
					<div>
						<span className={styles.selected}>{selectedKart.name}</span>
					</div>
					<div>Wins: <span className={styles.bold}>{selectedKart.wins}</span> Losses: <span className={styles.bold}>{selectedKart.losses}</span></div>													
					<div>Lucky: <span className={styles.bold}>{lucky(selectedKart.wins, selectedKart.losses)}%</span> of the time</div>													
				</div>
				: ""
			}
		</div>
	)	

}


export default KartSelectedStats

