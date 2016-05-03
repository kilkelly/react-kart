"use strict"

var fs = require("fs")
var path = require("path")
var express = require("express")
var webpack = require("webpack")

var app = express()

var port = 3000
var host = "localhost"

app.use(express.static(path.join(process.cwd(), "public", "assets")))

app.get("/", (req, res, next) => {
	let html = fs.readFileSync(path.join(process.cwd(), "public", "assets", "index.html"))
	res.end(html)
})

// start listening to incoming requests
app.listen(port, host, (err) => {
	if (err) {
		console.err(err.stack)
	} else {
		console.log("[PRODUCTION] ReactKart serving from http://" + host + ":" + port)
	}
})

