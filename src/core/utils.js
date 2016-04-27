/**
	Calculates how lucky this kart is in percentage terms
	@kartId - id of kart to calculate lucky index for
*/
export function lucky(kart) {	
	// prevent division by zero
	if (kart.wins + kart.losses !== 0) {
		return Math.floor(kart.wins * 100 / (kart.wins + kart.losses))
	} else {
		return 0
	}
	
}

/**
	Calculates a kart's winning
	@kart - the kart to calculate winnings for
	@betAmount - amount the user bet on the kart
*/
export function calculateWinnings(kart, betAmount) {
	let luckiness = lucky(kart)
	// a little bit more of a bonus for betting on a winner, more exciting!
	let extra = 3
	let winMultiplier = (100-luckiness) / 100	

	// calculate projected winnings
	return Math.floor(betAmount + (betAmount * winMultiplier * extra))	
}

/**
	Calculates a kart's losses
	@kart - the kart to calculate losses for
	@betAmount - amount the user bet on the kart
*/
export function calculateLoss(kart, betAmount) {
	let luckiness = lucky(kart)
	let lossMultiplier = luckiness / 100

	// calculate projected winnings
	return Math.floor(betAmount + (betAmount * lossMultiplier))	
}