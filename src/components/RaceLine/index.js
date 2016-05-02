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
			transition: "left 1s",
			width: "6%"
		}
		
		let thisStyle
		if (this.props.winner) {
			thisStyle = styles.winner
		} else if (this.props.selected) {
			thisStyle = styles.selected
		}
		else {
			thisStyle = styles.line
		}

		return (
			<div className={thisStyle}>
				<img src={this.props.kartImage} style={imgStyle} />
			</div>
		)

	}

})

export default RaceLine