"use strict"

import React from "react"
import styles from "./styles.scss"


// -------------------------------------------------------------------------------
const Footer = React.createClass({

	render: function() {

		return (
			<div id={styles.wrapper}>				
				<iframe src="https://ghbtns.com/github-btn.html?user=kilkelly&repo=reactkart&type=star&count=true" frameBorder="0" scrolling="0" width="170px" height="20px"></iframe><br/>
				<a href="https://github.com/kilkelly/reactkart">ReactKart on GitHub</a> by <a href="https://github.com/kilkelly/">Frank Kilkelly</a>
			</div>			
		)

	}

})

export default Footer