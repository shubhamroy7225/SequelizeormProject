//const fs = require("fs");
// const table = require("./models/users.js");
// const table1 = require("./models/users.js");    
require("dotenv-extended").load();

const config = require("./config");
//const usersModel = require("./models/users.js");

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
    const directorsModel = require("./models/Directors")(sequelize);


    sequelize
      .sync()
      .then(() => {
        const app = express();

        app.listen(config.port, () => {
          console.log(`App listening on port ${config.port}!`);
        });
      })
      .catch(err => {
        throw err;
      });
  })
  .catch(err => {
    throw err;
  });

// const usersModel = require("./models/users")(sequelize);
// const directorsModel = require("./models/Directors")(sequelize);
// usersModel.hasOne(directorsModel)
// sequelize
// .sync({
//   logging:console.log,
//   force:true

// })
// .then(() => {
//      console.log("connection established");
//       app.listen(config.port, () => {
//           console.log(`App listening on port ${config.port}!`)
//       });
//   })
//   .then(()=>{
//     fs.readFile("./data/movies.json", "utf-8", (err, file) => {
//         if (err) throw err;
//         else {
//           var printError = function(error, explicit) {
//             console.log(
//               `[${explicit ? "EXPLICIT" : "INEXPLICIT"}] ${error.name}: ${
//                 error.message
//               }`
//             );
//           };

//           try {
//             let data = JSON.parse(file);
//             usersModel.bulkCreate(data)
//           } catch (e) {
//             if (e instanceof SyntaxError) {
//               printError(e, true);
//             } else {
//               printError(e, false);
//             }
//           }
//         }
//   }).catch((err) => {
//         throw err;
//     });
//   })
// 
// sequelize
//   .define("directors", table.directorsModel, {
//     freezeTableName: true,
//     timestamps: false
//   })
//   .sync();
// fs.readFile("./data/movies.json", "utf-8", (err, file) => {
//   if (err) throw err;
//   else {
//     var printError = function(error, explicit) {
//       console.log(
//         `[${explicit ? "EXPLICIT" : "INEXPLICIT"}] ${error.name}: ${
//           error.message
//         }`
//       );
//     };

//     try {
//       let data = JSON.parse(file);
//       for(let i = 0; i < data.length; i++){
//       //sequelize.queryInterface.bngulkInsert(data[i]);
//       directorsModel.create({
//         director_id: data.Rank[i],
//         name: data.Director[i]
//       });
//       }
//     } catch (e) {
//       if (e instanceof SyntaxError) {
//         printError(e, true);
//       } else {
//         printError(e, false);
//       }
//     }
//   }
// });
//     sequelize.sync()
//     .then(() => {
//         const app = express();

//         app.listen(config.port, () => {
//             console.log(`App listening on port ${config.port}!`)
//         });
//     })
//     .catch((err) => {
//         throw err;
//     });
//  })
//   .catch(err => {
//     throw err;
//   });
