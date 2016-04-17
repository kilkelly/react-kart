"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import Kart from "../Kart"
import styles from "./style.scss"

// -------------------------------------------------------------------------------
const KartSelectArea = React.createClass({

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
				selected={this.props.karts[kartId].selected}
				selectKart={this.props.selectKart.bind(null, kartId)} />
		)
	},
	
	render: function() {

		let selectedKartName = ""		

		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
			if (this.props.karts[i].selected) {
				selectedKartName = this.props.karts[i].name	
			}
		}

		return (
			<div>
				<div className="row">
					<div className="column column-2">&nbsp;</div>
						<div className={styles.kartTable}>
							{this._generateKartColumn(1)}
							{this._generateKartColumn(2)}
							{this._generateKartColumn(3)}
							{this._generateKartColumn(4)}
						</div>	
					<div className="column column-2">&nbsp;</div>				
				</div>

				<div className="row">
					<div className="column column-2">&nbsp;</div>
						<div className={styles.kartTable}>
							{this._generateKartColumn(5)}
							{this._generateKartColumn(6)}
							{this._generateKartColumn(7)}
							{this._generateKartColumn(8)}
						</div>		
					<div className="column column-2">&nbsp;</div>				
				</div>				

				<div className="row">
					<div className="column column-2">&nbsp;</div>				
					<div className="column column-8">
						{
							selectedKartName 
							? <div className={styles.selectedMessage}>You have selected <span className={styles.selectedKartName}>{selectedKartName}</span></div>
							: ""
						}
					</div>
					<div className="column column-2">&nbsp;</div>				
				</div>

			</div>	
		)
	}

})

export default KartSelectArea