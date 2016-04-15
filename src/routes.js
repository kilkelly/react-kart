import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import AppContainer from "./containers/AppContainer"
import PlayContainer from "./containers/PlayContainer"
//import MyStatsContainer from "./containers/MyStatsContainer"
//import KartStatsContainer from "./containers/KartStatsContainer"
//import RaceLogContainer from "./containers/RaceLogContainer"
//import About from "./components/About"


export default (history) => {

	return(
		<Router history={history}>
			<Route path="/" component={AppContainer}>
				<IndexRoute component={PlayContainer} />
			</Route>
		</Router>
	)

}

/*
		<Router history={history}>
			<Route path="/" component={AppContainer}>
				<IndexRoute component={PlayContainer} />
				<Route path="mystats" component={MyStatsContainer} />
				<Route path="racerstats(/:kartid)" component={KartStatsContainer} />
				<Route path="racelog" component={RaceLogContainer} />
				<Route path="about" component={About} />
			</Route>
		</Router>
*/