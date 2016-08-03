"use strict"

import React from "react"
import Navigation from "../Navigation"
import Footer from "../Footer"
import styles from "./styles.scss"

import Reduxify from "../../reduxify"

// -------------------------------------------------------------------------------
const App = React.createClass({

	render: function() {
		return (
			<Reduxify>
				{(state, dispatch) => 			
					<div>
						<Navigation 
							balance={state.user.get("balance")}
							wins={state.user.get("wins")}
							losses={state.user.get("losses")} />

						{this.props.children}
						<Footer />
					</div>
				}
			</Reduxify>								
		)		
	}

})

export default App


