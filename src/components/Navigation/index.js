"use strict"

import React from "react"
import { Link, IndexLink } from "react-router"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------

const Navigation = React.createClass({	

	render: function() {
		return (
			<div id={styles.wrapper}>					

				<input type="checkbox" id={styles.menuCheckbox} />
				<label htmlFor={styles.menuCheckbox} id={styles.labelMenu}>Menu</label>				
				<div id={styles.responsiveMenu}>

				</div>			
				<div id={styles.logoContainer}>
					ReactKart										
				</div>												
				<nav id={styles.menuContainer}>
					<ul>
						<li class={styles.menuItem}><IndexLink to="/" activeClassName={styles.menuItemActive}>Play</IndexLink></li>
						<li class={styles.menuItem}>My Stats</li>
						<li class={styles.menuItem}>Kart Stats</li>
						<li class={styles.menuItem}><IndexLink to="/racelog" activeClassName={styles.menuItemActive}>Race Log</IndexLink></li>
						<li class={styles.menuItem}><IndexLink to="/about" activeClassName={styles.menuItemActive}>About</IndexLink></li>
					</ul>
				</nav>
				<div id={styles.balanceContainer}>
					Coin Balance: <span id={styles.balance}>{this.props.user.balance}</span>
				</div>
			</div>
		)
	}

})

export default Navigation