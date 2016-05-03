"use strict"

import React from "react"
import Kart from "../Kart"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const KartSelect = ({karts, selectedKart, selectKart}) => {

	return (
		<div>
			<h4>Select your kart!</h4>
			<div className={styles.table}>
				<div className={styles.row}>
					<div className={styles.cell}>
						{_kartColumn(karts[1], selectedKart, selectKart)}
						{_kartColumn(karts[2], selectedKart, selectKart)}
						{_kartColumn(karts[3], selectedKart, selectKart)}
						{_kartColumn(karts[4], selectedKart, selectKart)}
					</div>	
				</div>	
				<div className={styles.row}>					
					<div className={styles.cell}>
						{_kartColumn(karts[5], selectedKart, selectKart)}
						{_kartColumn(karts[6], selectedKart, selectKart)}
						{_kartColumn(karts[7], selectedKart, selectKart)}
						{_kartColumn(karts[8], selectedKart, selectKart)}
					</div>		
				</div>	
			</div>			
		</div>	
	)	
}

/**
	Returns the JSX needed to display a kart
	@kartId - id of kart to display
*/
function _kartColumn(kart, selectedKart, selectKart) {				

	return (
		<Kart 
			id={kart.id}
			name={kart.name}
			image={kart.image}
			selected={selectedKart && kart.id === selectedKart.id}
			selectKart={selectKart} />
	)
}

export default KartSelect
