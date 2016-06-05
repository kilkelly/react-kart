import { fromJS } from "immutable"

const NAMESPACE = "redux_localstorage_simple"

/**
	Saves specified parts of the Redux state tree into localstorage
	Note: this is Redux middleware. Read this for an explanation:
	http://redux.js.org/docs/advanced/Middleware.html
	
	@config - Object containing configuration options (leave blank to save entire state tree to localstorage)		
	Config object properties:
		states - Array of Strings - States to save
*/

export const save = (config = {}) => {
	
	const states = config.states === undefined ? [] : config.states;	

	return store => next => action => {

		next(action)		

		if (states.length === 0) {

			localStorage[NAMESPACE] 
					= JSON.stringify(store.getState())	

		} else {

			states.forEach(state => { 				
				localStorage[NAMESPACE + "_" + state] 
					= JSON.stringify(store.getState()[state])
			})
		}	

	}	

}

/**
	Loads specified states from localstorage into the Redux state tree. 
		
	@config - Object containing configuration options (leave blank to load entire state tree, if saved previously)
	Config object properties:
		states - Array of Strings - Parts of state tree to load
		immutable - Boolean - If dealing with Immutable.js data structures, set this to true to load them correctly

*/

export function load(config = {}) {	

	const states = config.states === undefined ? [] : config.states;
	const immutablejs = config.immutablejs === undefined ? false : config.immutablejs;	

	let loadedState = {}	

	if (states.length === 0) {

		// does default localstorage token exist?
		if (localStorage[NAMESPACE]) {
			loadedState = JSON.parse(localStorage[NAMESPACE])		

			if (immutablejs) {
				for(let key in loadedState) {
					loadedState[key] = fromJS(loadedState[key])
				}
			}

		}							

	} else {	

		states.forEach(function(state) {		

			if (localStorage[NAMESPACE + "_" + state]) {

				loadedState[state] = JSON.parse(localStorage[NAMESPACE + "_" + state])

			}		
		})

		if (immutablejs) {
			for(let key in loadedState) {
				loadedState[key] = fromJS(loadedState[key])
			}
		}		

	}		

	return loadedState
}

/**
	Combines multiple loads to return a single state for use in Redux's createStore method.
	Use this when parts of the loading process need to be handled differently e.g. some parts of your state tree are immutable and some are not
		
	@loads - Loads are passed into this method as normal arguments
		e.g. 
		combineLoads( 
			load({ states: ["user"] }), // loading normal object
			load({ states: ["products"], immutablejs: true ) // loading Immutable.js structure
		)	
*/

export function combineLoads(...loads) {	

	let combinedLoad = {}

	loads.forEach(load => {
		for (let state in load) {
			combinedLoad[state] = load[state]
		}
	})

	return combinedLoad
}

/**
	Clears all localstorage set only by this module
*/

export function clear() {	

	for (let key in localStorage) {
		if (key.indexOf(NAMESPACE) === 0) {
			localStorage.removeItem(key)
		}
	}

}
