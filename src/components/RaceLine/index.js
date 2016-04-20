"use strict"

import React from "react"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceLine = React.createClass({

	render: function() {

		return (
			<div>
				raceline<img src={this.props.kartImage} />
			</div>
		)

	}

})

export default RaceLine