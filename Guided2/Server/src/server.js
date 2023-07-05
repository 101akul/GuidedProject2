const express = require('express');
const dao = require('./data_access.js');

const app = express();
app.use(express.json());


app.get("/api/planets", function(req, res) {
    dao.call('findAllPlanets', {}, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/characters", async function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.call('findAllCharacters', {}, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/films", function(req, res) {
    dao.call('findAllFilms', {}, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/planets/:id", (req, res) => {
    dao.call('findPlanet', { id: req.params.id }, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/films/:id", (req, res) => {
    dao.call('findFilm', { id: req.params.id }, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/characters/:id", (req, res) => {
    dao.call('findCharacter', { id: req.params.id }, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

const port = 4000;
console.log("Server starting on port: " + port);
app.listen(port);