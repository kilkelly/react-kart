"use strict"

import React from "react"
import { Link, IndexLink } from "react-router"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------

const Navigation = ({ balance, wins, losses }) => {

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
					<li class={styles.menuItem}><IndexLink to="/racelog" activeClassName={styles.menuItemActive}>Race Log</IndexLink></li>						
					<li class={styles.menuItem}><IndexLink to="/about" activeClassName={styles.menuItemActive}>About</IndexLink></li>
				</ul>
			</nav>
			<div id={styles.balanceContainer}>
				<div>
					Coin Balance: <span id={styles.balance}>{balance}</span>
				</div>
				<div>
					Wins: <span id={styles.balance}>{wins}</span>
				</div>
				<div>
					Losses: <span id={styles.balance}>{losses}</span>
				</div>									
			</div>
		</div>
	)

}

export default Navigation