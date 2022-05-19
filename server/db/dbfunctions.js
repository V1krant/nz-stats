const connection = require('./connection')

function getRegionByID (region, db = connection) {
 return db('employed-people').where('region', region)
}

async function checkDatabase (db = connection) {
  const check = await db('employed-people').where('region', 'Auckland Region')
  if (check.length === 0) {
    return false
  }
  return true
 }

async function addData (data, db = connection) {
  let newData = await data.filter((element) => {
    let { Label1 } = element
    return Label1 == 'Actual'
   })
   const newArray = await newData.map((element) => {
     let { Geo, Value, Period } = element
     return {period: Period, region: Geo, employed: Value}
   })
   await db('employed-people').insert(newArray)
}

function insertData (data, db = connection) {
  return db('users').insert({name: data.name, region: data.region})
}

function editData (data, db = connection) {
  return db('users').where({name: data.name}).update({name: data.newName})
}

function getUserNames (db = connection) {
  return db('users').select('name')
}


module.exports = {
  getRegionByID,
  checkDatabase,
  addData,
  insertData,
  editData,
  getUserNames
}
