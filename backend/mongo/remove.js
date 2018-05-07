var mongo = require('mongodb').MongoClient
var dbname = process.argv[2]
var collect = process.argv[3]
var id = process.argv[4]
var url = 'mongodb://localhost:27017'

mongo.connect(url, function(err, db) {
    if (err) throw err
    let dataBase = db.db(dbname);
    var collection = dataBase.collection(collect)
    collection.remove({
        _id: id
    }, function(err) {
        if (err) throw err
        dataBase.close()
    })
})