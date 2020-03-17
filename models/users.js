// const Sequelize = require("sequelize");
//  const Model = Sequelize.Model;
//  module.exports = function(sequelize) {
//   class User extends Model {}
//    User.init(
//      {
//       rank: {
//         type: Sequelize.INTEGER
//       },
//       title: {
//         type: Sequelize.STRING,
//         primaryKey: true
//       },
//       description: {
//         type: Sequelize.STRING
//       },
//       runtime: {
//         type: Sequelize.INTEGER
//       },
//       genre: {
//         type: Sequelize.STRING
//       },
//       rating: {
//         type: Sequelize.FLOAT
//       },
//       metascore: {
//         type: Sequelize.STRING
//       },
//       votes: {
//         type: Sequelize.INTEGER
//       },
//       gross_earning_in_mil: {
//         type: Sequelize.STRING
//       },
//       director_id: {
//         type: Sequelize.BIGINT.UNSIGNED
//       },
//       actor: {
//         type: Sequelize.STRING
//       },
//       year: {
//         type: Sequelize.INTEGER
//       }
//     },
//     {
//       sequelize,
//       modelName: "movies"
//       // options
//     }
//   );
// };
// module.exports = function(sequelize) {
//   class User extends Model {}
//   User.init(
//     {
//       director_id: {
//         type: Sequelize.BIGINT.UNSIGNED,
//         autoIncrement: true,
//         primaryKey: true
//       },
//       director_name: {
//         type: Sequelize.STRING
//       }
//     },
//     {
//       sequelize,
//       modelName: "directors"
//     }
//   );
// };

const Sequelize = require("sequelize");
 const Model = Sequelize.Model;
 module.exports = function(sequelize) {
    module.exports = {
        movies: {
          rank: {
            type: Sequelize.INTEGER,
          },
          title: {
            type: Sequelize.STRING,
            primaryKey: true
          },
          description: {
            type: Sequelize.STRING
          },
          runtime: {
            type: Sequelize.INTEGER
          },
          genre: {
            type: Sequelize.STRING
          },
          rating: {
            type: Sequelize.FLOAT
          },
          metascore: {
            type: Sequelize.STRING
          },
          votes: {
            type: Sequelize.INTEGER
          },
          gross_earning_in_mil: {
            type: Sequelize.STRING
          },
          director_id: {
            type: Sequelize.BIGINT.UNSIGNED
          },
          actor: {
            type: Sequelize.STRING
          },
          year: {
            type: Sequelize.INTEGER
          }
        },
        directors: {
          director_id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
          },
          director_name: {
            type: Sequelize.STRING
          }
        }
      }
 }
    
