"use strict"

const LOCAL_STORAGE = "localstorage"

/**
	Persists specified parts of the Redux state tree
	Note: this is Redux middleware. Read this for an explanation:
	http://redux.js.org/docs/advanced/Middleware.html

	@namespace - namespace to prevent localstorage conflicts
	@reducers - array of reducer names to persist
	@storage - storage method
*/
const saveRedux = ({ namespace = "", reducers = null, storage = LOCAL_STORAGE }) => store	=> next => action => {

	next(action)

	// caller has not specified any namespace
	if (namespace === "") {
		throw new Error("Property 'namespace' not provided for namespacing purposes. Please provide in config object argument when calling saveRedux function.", "color:red")
		return
	}

	// caller has not specified any reducers to persist
	if (reducers === null) {
		console.log("%cWarning: No reducers provided for persistence", "color:red")
		return
	}	

	// handle different storage strategies
	switch (storage) {
		case LOCAL_STORAGE:
			reducers.forEach(reducer => { 				
				// persist reducer to Local Storage
				localStorage[namespace + "_" + reducer] 
					= JSON.stringify(store.getState()[reducer])
			})	

			break
		default:
			throw new Error("Invalid storage method")	
	}

}


export default saveRedux