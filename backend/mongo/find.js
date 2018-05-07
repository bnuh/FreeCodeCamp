var mongo = require('mongodb').MongoClient
var age = process.argv[2]

var url = 'mongodb://localhost:27017/'

const dbName = 'learnyoumongo';

// Use connect method to connect to the server
mongo.connect(url, function(err, client) {
  if (err) throw err
  const db = client.db(dbName);
  const parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: +age
    }
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})