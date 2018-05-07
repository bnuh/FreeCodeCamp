var mongo = require('mongodb').MongoClient
var dbname = process.argv[2]
var url = 'mongodb://localhost:27017'

mongo.connect(url, function(err, db) {
    if (err) throw err
    let dataBase = db.db(dbname);
    var collection = dataBase.collection('users')
    collection.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function(err) {
        if (err) throw err
        dataBase.close()
    })
})