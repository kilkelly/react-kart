"use strict"

import React from "react"
import classname from "classnames"
import styles from "./style.css"

// -------------------------------------------------------------------------------
const Kart = React.createClass({

	render: function() {

		//** determine styles for this kart		
		let kartClass = styles.kart
		if (this.props.selected) {
			kartClass += " " + styles.selected
		}
		//*

		return (
			<div className={styles.kartCell}>			
				<img 
					className={kartClass}
					src={this.props.image}
					title={this.props.name}
					onClick={this.props.selectKart} />			
			</div>		
		)	
	}

})

export default Kart