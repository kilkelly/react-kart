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
			image: testMode ? "" : require("../images/kart1.png"),
			wins: 2,
			losses: 10

		},
		2: {
			name: "kart2",
			image: testMode ? "" : require("../images/kart2.png"),
			wins: 1,
			losses: 11
		},
		3: {
			name: "kart3",
			image: testMode ? "" : require("../images/kart3.png"),
			wins: 3,
			losses: 9
		},
		4: {
			name: "kart4",
			image: testMode ? "" : require("../images/kart4.png"),
			wins: 4,
			losses: 8
		},
		5: {
			name: "kart5",
			image: testMode ? "" : require("../images/kart5.png"),
			wins: 0,
			losses: 12
		},
		6: {
			name: "kart6",
			image: testMode ? "" : require("../images/kart6.png"),
			wins: 2,
			losses: 10
		},
		7: {
			name: "kart7",
			image: testMode ? "" : require("../images/kart7.png"),
			wins: 1,
			losses: 11
		},
		8: {
			name: "kart8",
			image: testMode ? "" : require("../images/kart8.png"),
			wins: 3,
			losses: 9
		}	
	}

	return karts
}

// -------------------------------------------------------------------------------

module.exports = getKarts