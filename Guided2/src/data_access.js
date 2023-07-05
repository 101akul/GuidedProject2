// mongodb client driver
const { MongoClient } = require('mongodb');

// DB Connection URL
var url = "mongodb://localhost:27017";

// Create client
const client = new MongoClient(url);

// Database and collection variables
const dbName = "swapi"; 

module.exports.call = async function call(operation, parameters, callback) {
    // connect to the db server
    await client.connect();

    // set the database to use
    const db = client.db(dbName);
    // set the collection to use
    var collection = db.collection("planets");

    //Execute Operations
    // available operations: 
    // ['initbooks'|'clearbooks'|'findallbooks'|'findbook'|'updatebook' ]
    switch (operation.toLowerCase()) {

        case 'findallplanets':
            collection = db.collection("planets");
            const out = await collection.find({}).toArray();
            callback(out);
            break;
        case 'findallcharacters':
            collection = db.collection("characters");
            const chars = await collection.find({}).toArray();
            callback(chars);
            break;
        case 'findallfilms':
            collection = db.collection("films");
            const films = await collection.find({}).toArray();
            callback(films);
            break;
        case 'findplanet':
            collection = db.collection("planets");
            const planet = await collection.findOne({ id: Number(parameters.id)});
            callback(planet);
            break;
        case 'findfilm':
            collection = db.collection("films");
            const film = await collection.findOne({ id: Number(parameters.id)});
            callback(film);
            break;

        case 'findcharacter':
            collection = db.collection("characters");
            const char = await collection.findOne({ id: Number(parameters.id)});
            callback(char);
            break;
        default:
            break;
    }
    console.log( 'call complete: ' + operation );
    client.close();
    return 'call complete';
}

