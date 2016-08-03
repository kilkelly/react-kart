// - A little experiment to see if I could use the "Function as Child" pattern
// to write an alternative to react-redux.
// https://medium.com/@iammerrick/function-as-child-components-5f3920a9ace9#.f172qan9s
// - Components include the Reduxify component in their render function and they
// would be able to access the Redux store directly.
// - Experiment broke down however when I needed to use some Redux store data in a
// component's lifecycle methods. Since Reduxify meant that the Redux store could only
// be accessed inside a component's render method, this data was unavailable to use.


import React from "react"
import getStore from "./store"

let store = getStore()
let unsubscribe

function reRender() {
	this.setState({}) // force re-render
}

const Reduxify = React.createClass({

	componentDidMount: function()	{	
		unsubscribe = store.subscribe(reRender.bind(this))		
	},

	componentWillUnmount: function()	{
		unsubscribe()		
	},	

	render: function() {
		return(
			<span>
				{this.props.children(store.getState(), store.dispatch)}
			</span>
		)
	}
})

export default Reduxify



