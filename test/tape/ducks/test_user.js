import tape from "tape"

import reducer,	{
	winsIncrementUser,
	lossesIncrementUser,
	balanceAdd,
	balanceSubtract,
	racesIncrement,
	setSelectedKart,
	createUser
}
from "../../../src/ducks/user"



tape("User's wins increase", function(t) {

	const initialState = createUser()
	const kartId = 6 // kart to test with

	const nextState = reducer(initialState, winsIncrementUser())
	const expectedState = initialState.set("wins", 1)

	t.deepEquals(nextState, expectedState)
	t.end()

})

//--------------------------------------------------------

tape("User selects kart", function(t) {

	//t.plan(2)

	const initialState = createUser()
	const kartId = 6 // kart to test with	

	const nextState = reducer(initialState, setSelectedKart(kartId)) // select kart which has the supplied Id	

	t.equal(nextState.get("selectedKart"), kartId)
	t.end()

})