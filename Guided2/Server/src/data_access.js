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
    let temp = [];

    //Execute Operations
    // available operations: 
    // ['initbooks'|'clearbooks'|'findallbooks'|'findbook'|'updatebook' ]
    switch (operation.toLowerCase()) {

        case 'findallplanets':
            collection = db.collection("planets");
            const planets = await collection.find({}).project({_id: 0}).toArray();
            callback(planets);
            break;
        case 'findallcharacters':
            collection = db.collection("characters");
            const chars = await collection.find({}).project({_id: 0}).toArray();
            callback(chars);
            break;

        case 'findallfilms':
            collection = db.collection("films");
            const films = await collection.find({}).project({_id: 0}).toArray();
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

        case 'findplanetoffilm':
            collection = db.collection("films_planets");
            const out = await collection.find({film_id: Number(parameters.id)}).toArray();
            temp = []
            for(let i =0; i<out.length; i++)
            {
                collection = db.collection("planets");
                let ex = await collection.findOne({ id: Number(out[i].planet_id)});
                temp.push({"id" :ex.id, "name": ex.name})
            }
            callback(temp);
            break;
        
        case 'findcharactersoffilm':
            collection = db.collection("films_characters");
            const output = await collection.find({film_id: Number(parameters.id)}).toArray();
            temp = [];
            for(let i =0; i<output.length; i++)
            {
                collection = db.collection("characters");
                let ex = await collection.findOne({ id: Number(output[i].character_id)});
                temp.push({"id" :ex.id, "name": ex.name})
            }
            callback(temp);
            break;

        case 'findfilmsofcharacters':
            collection = db.collection("films_characters");
            const output1 = await collection.find({character_id: Number(parameters.id)}).toArray();
            temp = [];
            for(let i =0; i<output1.length; i++)
            {
                collection = db.collection("films");
                let ex = await collection.findOne({ id: Number(output1[i].film_id)});
                temp.push({"id" :ex.id, "title": ex.title})
            }
            callback(temp);
            break;
            
        case 'findfilmofplanet':
            collection = db.collection("films_planets");
            const out1 = await collection.find({planet_id: Number(parameters.id)}).project({_id: 0}).toArray();
            temp = [];
            for(let i =0; i<out1.length; i++)
            {
                collection = db.collection("films");
                let ex = await collection.findOne({ id: Number(out1[i].film_id)});
                temp.push({"id" :ex.id, "title": ex.title})
            }
            callback(temp);
            break;
        
        case 'findcharacterofplanet':
            collection = db.collection("characters");
            const out2 = await collection.find({homeworld: Number(parameters.id)}).project({_id:0, id: 1, name:1, homeworld: 1}).toArray();
            callback(out2);
            break;


        default:
            break;
    }
    console.log( 'call complete: ' + operation );
    return 'call complete';
}

