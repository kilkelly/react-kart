"use strict"

const LOCAL_STORAGE = "localstorage"

/**
	Persists specified parts of the Redux state tree

	options:
		@appName - namespace to prevent localstorage conflicts
		@reducers - array of reducer names to persist
		@storage - storage method
*/
const persistRedux = options => store => next => action => {

	next(action)

	// caller has not specified any reducers to persist
	if (!options.hasOwnProperty("appName")) {
		throw new Error("Property 'appName' not provided for namespacing purposes. Please provide in 'options' object argument when calling persistRedux function.", "color:red")
		return
	}

	// caller has not specified any reducers to persist
	if (!options.hasOwnProperty("reducers")) {
		console.log("%cWarning: No reducers provided for persistence", "color:red")
		return
	}

	let reducers = options.reducers					

	// was storage method specified?
	let storage = 	options.hasOwnProperty("storage") 
					? options.storage
					: LOCAL_STORAGE					

	// handle different storage strategies
	switch (storage) {
		case LOCAL_STORAGE:
			reducers.forEach(reducer => { 				
				// persist reducer to Local Storage
				localStorage[options.appName + "_" + reducer] 
					= JSON.stringify(store.getState()[reducer])
			})	

			break
		default:
			throw new Error("Invalid storage method")	
	}

}


export default persistRedux