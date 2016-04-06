var express = require("express")
var webpack = require("webpack")
var config = require("./webpack/webpack.config.dev")

var app = express()

var compiler = webpack(config)

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: false,
	publicPath: config.output.publicPath
}))

app.use(require("webpack-hot-middleware")(compiler))

var port = 3000
var host = "localhost"

// start listening to incoming requests
app.listen(port, host, (err) => {
	if (err) {
		console.err(err.stack)
	} else {
		console.log("Dev server listening on http://" + host + ":" + port)
	}
})

