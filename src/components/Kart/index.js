"use strict"

import React from "react"
import styles from "./style.scss"

// -------------------------------------------------------------------------------
const Kart = ({id, image, name, selected, selectKart}) => {

	return (
		<div className={styles.cell}>			
			<img 
				className={_selectedOrNot(selected)}
				src={image}
				title={name}
				onClick={selectKart.bind(null, id)} />			
		</div>		
	)	
}

/**
	Returns style depending on whether kart is selected or not
	@kartId - id of kart to determine style for
*/
function _selectedOrNot(selected) {				

	let kartClass = styles.kart 	// base styles for kart
	if (selected) {
		return kartClass += " " + styles.selected
	}
	else {
		return kartClass
	}

}

export default Kart
