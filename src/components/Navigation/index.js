"use strict"

import React from "react"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------

const Navigation = React.createClass({

	render: function() {
		return (
			<div className={styles.nav}>
				<div className={styles.responsiveMenu}>
					menu
				</div>			
				<div className={styles.logo}>
					ReactKart
				</div>
				<nav className={styles.menu}>
					<ul>
						<li>Play</li>
						<li>My Stats</li>
						<li>Racer Stats</li>
						<li>Race Log</li>
						<li>About</li>
					</ul>
				</nav>
				<div className={styles.balance}>
					Coin Balance
				</div>
			</div>
		)
	}

})

export default Navigation