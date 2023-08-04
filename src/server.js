// const express = require('express')
import express from "express";
import 'dotenv/config'
import configViewEngine from "./configs/viewEngine";

const app = express()
const port = process.env.PORT || 8080;
console.log(process.env.PORT)

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})