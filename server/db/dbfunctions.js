const connection = require('./connection')

function getRegionByID (region, db = connection) {
 return db('employed-people').where('region', region)
}

function checkDatabase (db = connection) {
  return db('employed-people').where('region', 'Auckland Region')
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


module.exports = {
  getRegionByID,
  checkDatabase,
  addData
}
