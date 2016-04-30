"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import KartSelect from "../KartSelect"
import KartSelectedStats from "../KartSelectedStats"
import ___CreateBet from "../../containers/___CreateBet"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceSetup = React.createClass({
	
	render: function() {

		return (			
			<div className={styles.table}>
				<div className={styles.cell}>	

					<KartSelect 
						karts={this.props.karts}
						selectedKart={this.props.selectedKart}
						selectKart={this.props.selectKart} />

				</div>
				<div className={styles.cell}>

					<KartSelectedStats
						selectedKart={this.props.selectedKart} />

					<___CreateBet />					

				</div>
			</div>		
		)
	}

})

export default RaceSetup