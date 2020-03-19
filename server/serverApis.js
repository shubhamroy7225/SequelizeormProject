const express = require("express");
const sql = require("./directorsFunction.js");
const moviesquery = require("./moviesFunction.js");
const bodyparser = require("body-parser");
//const consoles = require('./logger')
const app = express();
const port = 5000;
// const route = require('./routes')

app.use(bodyparser.json());
// app.use('', )

app.get("/", (req, res) => {
  res.send("hello");
});
//const fileName = "server.js";
app.get("/api/movies", (req, res) => {
  moviesquery
    .movieTitle()
    .then(data => {
      //consoles.logger.info({ message: "movieTitle sccessfully running and location is " + fileName })
      console.log("data reterived");
      res.send(data);
    })
    .catch(err => {
      //consoles.logger.error({ message: err + " movieTitle got some error and location is " + fileName })
      console.log(err);
    });
});

app.get("/api/movies/:movieId", (req, res) => {
  const id = req.params.movieId;
  moviesquery
    .movieId(id)
    .then(data => {
      console.log("data reterived");
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/movies", (req, res) => {
  const info = req.body;
  moviesquery
    .movieInsert(info)
    .then(data => {
      console.log("data inserted sucessfully");
      res.send("data inserted sucessfully");
    })
    .catch(err => {
      console.log(err);
    });
});

app.put("/api/movies/:movieId", (req, res) => {
  const id = req.params.movieId;
  const info = req.body;
  moviesquery
    .updateMovie(id, info)
    .then(data => {
      console.log("data for id" + id + " updated sucessfully");
      res.send("data for id" + id + " updated sucessfully");
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/api/movies/:movieId", (req, res) => {
  const id = req.params.movieId;
  moviesquery
    .deleteMovie(id)
    .then(data => {
      console.log("movie delete sucessfully");
      res.send("movie deleted sucessfully");
    })
    .catch(err => {
      console.log(err);
    });
});

//director
app.get("/api/directors", (req, res) => {
  sql
    .getAllDirectors()
    .then(data => {
      //consoles.logger.info({ message: "movieTitle sccessfully running and location is " + fileName })
      console.log("all data reterived");
      res.send(data);
    })
    .catch(err => {
      //consoles.logger.error({ message: err + " movieTitle got some error and location is " + fileName })
      console.log(err);
    });
});

app.get("/api/directors/:directorId", (req, res) => {
  const director_id = req.params.directorId;
  sql
    .getDirectorsWithId(director_id)
    .then(data => {
      console.log("data retreived for director id = " + director_id);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/directors", (req, res) => {
  const info = req.body;
  sql
    .addNewDirector(info)
    .then(data => {
      console.log("data inserted sucessfully");
      res.send("data inserted sucessfully");
    })
    .catch(err => {
      console.log(err);
    });
});
app.put("/api/directors/:directorId", (req, res) => {
  const directorid = req.params.directorId;
  const info = req.body;
  sql
    .updateDirectors(directorid, info)
    .then(data => {
      console.log("data for id " + directorid + " updated sucessfully");
      res.send("data for id " + directorid + " updated sucessfully");
    })
    .catch(err => {
      console.log(err);
    });
});
app.delete("/api/directors/:directorId", (req, res) => {
  const director_id = req.params.directorId;
  sql
    .deleteDirector(director_id)
    .then(data => {
      console.log(
        "data deleted sucessfully for the director having id " + director_id
      );
      res.send(
        "data deleted sucessflly for the director having id " + director_id
      );
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(` app listening on port ${port}!`);
  //logger.info(`APP LAUNCHED IN PORT ${port} `)
});
