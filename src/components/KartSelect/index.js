"use strict"

import React from "react"
import Kart from "../Kart"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const KartSelect = React.createClass({

	/**
		Returns the JSX needed to display a kart
		@kartId - id of kart to display
	*/
	_generateKartColumn: function(kartId) {				
		return (
			<Kart 
				kartId={kartId}
				name={this.props.karts[kartId].name}
				image={this.props.karts[kartId].image}
				selected={kartId === this.props.user.selectedKart}
				selectKart={this.props.setSelectedKart.bind(null, kartId)} />
		)
	},

	render: function() {

		return (
			<div className={styles.table}>
				<div className={styles.row}>
					<div className={styles.cell}>
						{this._generateKartColumn(1)}
						{this._generateKartColumn(2)}
						{this._generateKartColumn(3)}
						{this._generateKartColumn(4)}
					</div>	
				</div>	
				<div className={styles.row}>					
					<div className={styles.cell}>
						{this._generateKartColumn(5)}
						{this._generateKartColumn(6)}
						{this._generateKartColumn(7)}
						{this._generateKartColumn(8)}
					</div>		
				</div>	
			</div>			
		)	
	}

})

export default KartSelect