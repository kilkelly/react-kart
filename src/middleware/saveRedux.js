"use strict"

/**
	Persists specified parts of the Redux state tree
	Note: this is Redux middleware. Read this for an explanation:
	http://redux.js.org/docs/advanced/Middleware.html

	@namespace - namespace to prevent localstorage conflicts
	@reducers - array of reducer names to persist
	@storage - storage method
*/
const saveRedux = ({
		namespace = "",
		reducers = null
	}) => store	=> next => action => {

	next(action)

	// caller has not specified any namespace
	/*if (namespace === "") {
		throw new Error("Property 'namespace' not provided for namespacing purposes. Please provide in config object argument when calling saveRedux function.", "color:red")
		return
	}*/
	if (typeof namespace === "string" && namespace.length > 0) {
		namespace = namespace + "_"
	} else {
		namespace = ""
	}

	// caller has not specified any reducers to persist
	/*if (reducers === null) {
		console.log("%cWarning: No reducers provided for persistence", "color:red")
		return
	}	*/


	if (reducers === null) {
		localStorage[namespace + "state"] 
				= JSON.stringify(store.getState())	
	} else {
		reducers.forEach(reducer => { 				
			// persist reducer to Local Storage
			localStorage[namespace + reducer] 
				= JSON.stringify(store.getState()[reducer])
		})
	}	

}


export default saveRedux