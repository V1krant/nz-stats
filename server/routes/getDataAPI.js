const express = require('express')
const db = require('../db/dbfunctions')
const router = express.Router()
const request = require('superagent');
const { database } = require('pg/lib/defaults');
require('dotenv').config({silent: true})

router.get('/', (req, res) => {
  db.getFruits()
    .then(results => {
      // res.json({ fruits: results.map(fruit => fruit.name) })
      // return null
      res.json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get ('/getdata', (req, res) => {
  request
  .get('https://api.stats.govt.nz/opendata/v1/EmploymentIndicators/Observations')
  .set('Ocp-Apim-Subscription-Key', process.env.API_KEY) 
    .then(response => {
      const { value } = JSON.parse(response.text)
       db.addData(value)
    })
    .then(() => {
      return request
      .get('https://api.stats.govt.nz/odata/v1/EmploymentIndicators/Observations?$skip=10000')
      .set('Ocp-Apim-Subscription-Key', process.env.API_KEY) 
    })
    .then((response) => {
      const { value } = JSON.parse(response.text)
      db.addData(value)
    })
    .finally(() => {
      res.json('it worked')
    })
    .catch(err => console.error(err))
    res.status(500).json({ message: 'Something went wrong' })
})


module.exports = router
