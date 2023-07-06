const express = require('express');
const dao = require('./data_access.js');

const app = express();
app.use(express.json());


app.get("/api/planets", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.call('findAllPlanets', {}, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/characters", function(req, res) {
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
    res.setHeader("Access-Control-Allow-Origin", "*");
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
    res.setHeader("Access-Control-Allow-Origin", "*");
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
    res.setHeader("Access-Control-Allow-Origin", "*");
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
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.call('findCharacter', { id: req.params.id }, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/films/:id/characters", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.call('findcharactersoffilm', { id: req.params.id }, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/characters/:id/films", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.call('findfilmsofcharacters', { id: req.params.id }, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/films/:id/planets", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.call('findplanetoffilm', { id: req.params.id }, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/planets/:id/films", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.call('findfilmofplanet', { id: req.params.id }, (result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/api/planets/:id/characters", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.call('findcharacterofplanet', { id: req.params.id }, (result) => {
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