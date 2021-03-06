"use strict"

import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import ___App from "./containers/___App"
import ___Play from "./containers/___Play"
import ____RaceLog from "./containers/___RaceLog"
import About from "./components/About"


export default (history) => {

	return(
		<Router history={history}>
			<Route path="/" component={___App}>
				<IndexRoute component={___Play} />
				<Route path="racelog" component={____RaceLog} />
				<Route path="about" component={About} />
			</Route>
		</Router>
	)

}
