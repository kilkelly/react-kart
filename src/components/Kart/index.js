"use strict"

import React from "react"
import classname from "classnames"
import style from "./style.css"

// store images as base64 inline or by file location depending on the size of the image
// (webpack handles this storage choice)
let kartImages = []
kartImages[1] = require("../../images/kart1.png")
kartImages[2] = require("../../images/kart2.png")
kartImages[3] = require("../../images/kart3.png")
kartImages[4] = require("../../images/kart4.png")
kartImages[5] = require("../../images/kart5.png")
kartImages[6] = require("../../images/kart6.png")
kartImages[7] = require("../../images/kart7.png")
kartImages[8] = require("../../images/kart8.png")


// -------------------------------------------------------------------------------
const Kart = React.createClass({

	render: function() {

		let kartClass = style.kart
		if (this.props.selected) {
			kartClass += " " + style.selected
		}
		console.log(kartClass)

		return (			
			<img 
				className={kartClass}
				src={kartImages[this.props.kartId]}
				title={this.props.kartId}
				onClick={this.props.selectKart} />			
		)	
	}

})

export default Kart