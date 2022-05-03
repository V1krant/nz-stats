const express = require('express')
const db = require('../db/dbfunctions')
const router = express.Router()
const request = require('superagent');
const { database } = require('pg/lib/defaults');
require('dotenv').config({silent: true})

router.get ('/getdata', (req, res) => {
  return request
  .get('https://api.stats.govt.nz/opendata/v1/EmploymentIndicators/Observations')
  .set('Ocp-Apim-Subscription-Key', process.env.API_KEY) 
    .then(response => {
      const { value } = JSON.parse(response.text)
      console.log(1)
       db.addData(value)
    })
    .then(() => {
      return request
      .get('https://api.stats.govt.nz/odata/v1/EmploymentIndicators/Observations?$skip=10000')
      .set('Ocp-Apim-Subscription-Key', process.env.API_KEY) 
    })
    .then((response) => {
      const { value } = JSON.parse(response.text)
      console.log(2)
      db.addData(value)
    })
    .finally(() => {
      console.log(3)
      res.json('Populated')
    })
})

router.post('/insertdata', (req, res) => {
const data = req.body
  db.insertData(data)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})


router.get('/checkdata', (req, res) => {
  db.checkDatabase()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/editdata', (req, res) => {
  const data = req.body
    db.editData(data)
      .then(results => {
        res.json(results)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })
  })

  router.get('/getusernames', (req, res) => {
      db.getUserNames()
        .then(results => {
          res.json(results)
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({ message: 'Something went wrong' })
        })
    })

router.get('/:id', (req, res) => {
  db.getRegionByID(req.params.id)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
