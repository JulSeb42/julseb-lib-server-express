import "dotenv/config"
import express from "express"
import config from "./config"
import allRoutes from "./routes"
import { errorHandler } from "./error-handling"
import { BASE_API_URL } from "./utils"

import "./db"

const app = express()
config(app)

app.use(function (_, res, next) {
	res.header("Access-Control-Allow-Origin", `${process.env.API_URL}/api`) // update to match the domain you will make the request from
	res.header("Content-type", "application/json")
	next()
})

app.use(BASE_API_URL, allRoutes)
errorHandler(app)

export default app
