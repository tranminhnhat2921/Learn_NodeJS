// const express = require('express')
import express from "express";
import 'dotenv/config'
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web.js"

const app = express()
const port = process.env.PORT || 8080;
console.log(process.env.PORT)

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})