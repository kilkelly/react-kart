"use strict"

/**
	@testMode = this flag is set during unit tests so that we don't try to 'require' images.
				We need webpack to do that, which is not used during unit tests
*/
function getKarts(testMode = false) {

	//** Config object which is used to populate our karts state in the app
	// Note: store images as base64 inline or by file location depending on the size of the image
	// (webpack handles this storage choice)
	const karts = {
		1: {
			name: "kart1",
			image: testMode ? "" : require("../images/kart8.png")
		},
		2: {
			name: "kart2",
			image: testMode ? "" : require("../images/kart8.png")
		},
		3: {
			name: "kart3",
			image: testMode ? "" : require("../images/kart8.png")
		},
		4: {
			name: "kart4",
			image: testMode ? "" : require("../images/kart8.png")
		},
		5: {
			name: "kart5",
			image: testMode ? "" : require("../images/kart8.png")
		},
		6: {
			name: "kart6",
			image: testMode ? "" : require("../images/kart8.png")
		},
		7: {
			name: "kart7",
			image: testMode ? "" : require("../images/kart8.png")
		},
		8: {
			name: "kart8",
			image: testMode ? "" : require("../images/kart8.png")
		}	
	}

	return karts
}

// -------------------------------------------------------------------------------

module.exports = getKarts