var mongo = require('mongodb').MongoClient

var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
    firstName: firstName,
    lastName: lastName
}

var url = 'mongodb://localhost:27017'
mongo.connect(url, function(err, db) {

    if (err) throw err
    let dataBase = db.db('learnyoumongo');

    var collection = dataBase.collection('docs')

    collection.insert(doc, function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(doc))
        dataBase.close()
    })
})