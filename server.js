const fs = require("fs");
const tableDef = require("./models/users.js");
require("dotenv-extended").load();

const config = require("./config");
const usersModel = require("./models/users.js");

const Sequelize = require("sequelize");
const express = require("express");

sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    dialect: "mysql",
    pool: {
      max: config.mysql.pool.max,
      min: config.mysql.pool.min,
      acquire: config.mysql.pool.acquire,
      idle: config.mysql.pool.idle
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

    const usersModel = require("./models/users")(sequelize);

    sequelize
      .define("movies_table", tableDef.movies, {
        freezeTableName: true,
        timestamps: false
      })
      .sync();
    fs.readFile("./data/movies.json", "utf-8", (err, file) => {
      if (err) throw err;
      else {
        var printError = function(error, explicit) {
          console.log(
            `[${explicit ? "EXPLICIT" : "INEXPLICIT"}] ${error.name}: ${
              error.message
            }`
          );
        };

        try {
          let data = JSON.parse(file);
          sequelize.queryInterface.bulkInsert("movies_table", data);
        } catch (e) {
          if (e instanceof SyntaxError) {
            printError(e, true);
          } else {
            printError(e, false);
          }
        }
        // Promise.resolve(JSON.parse(file)).then(json => {
        //   let data = json
        //   sequelize.queryInterface.bulkInsert('movies_table', data)
        // }).catch(err => {
        //     response = response
        // });
      }
    });
  })
  .catch(err => {
    throw err;
  });
