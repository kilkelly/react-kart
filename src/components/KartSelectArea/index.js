"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import Kart from "../Kart"

// -------------------------------------------------------------------------------
const KartSelectArea = React.createClass({

	/**
		Returns the JSX needed to display a kart
		@kartId - id of kart to display
	*/
	_generateKartColumn: function(kartId) {				
		return (
			<div className="column column-2">
				<Kart 
					kartId={kartId}
					selected={this.props.karts[kartId].selected}
					selectKart={this.props.selectKart.bind(null, kartId)}
				/>
			</div>	
		)
	},
	
	render: function() {

		return (
			<div>
				<div className="row">
					<div className="column column-2">&nbsp;</div>
					{this._generateKartColumn(1)}
					{this._generateKartColumn(2)}
					{this._generateKartColumn(3)}
					{this._generateKartColumn(4)}
					<div className="column column-2">&nbsp;</div>				
				</div>

				<div className="row">
					<div className="column column-2">&nbsp;</div>
					{this._generateKartColumn(5)}
					{this._generateKartColumn(6)}
					{this._generateKartColumn(7)}
					{this._generateKartColumn(8)}
					<div className="column column-2">&nbsp;</div>				
				</div>				
			</div>	
		)
	}

})

export default KartSelectArea