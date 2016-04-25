"use strict"

import React from "react"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceLine = React.createClass({

	render: function() {		

		let imgStyle = {			
			height: "auto",
			left: this.props.distanceTraveled + "%",
			position: "relative",			
			width: "5%",
		}
		
		return (
			<div className={this.props.selected ? styles.selected : styles.line}>
				<img src={this.props.kartImage} style={imgStyle} />
			</div>
		)

	}

})

export default RaceLine