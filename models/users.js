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


// const Sequelize = require("sequelize");
//  const Model = Sequelize.Model;
//  module.exports = function(sequelize) {
//     module.exports = {
//         movies: {
//           rank: {
//             type: Sequelize.INTEGER,
//           },
//           title: {
//             type: Sequelize.STRING,
//             primaryKey: true
//           },
//           description: {
//             type: Sequelize.STRING
//           },
//           runtime: {
//             type: Sequelize.INTEGER
//           },
//           genre: {
//             type: Sequelize.STRING
//           },
//           rating: {
//             type: Sequelize.FLOAT
//           },
//           metascore: {
//             type: Sequelize.STRING
//           },
//           votes: {
//             type: Sequelize.INTEGER
//           },
//           gross_earning_in_mil: {
//             type: Sequelize.STRING
//           },
//           director_id: {
//             type: Sequelize.BIGINT.UNSIGNED
//           },
//           actor: {
//             type: Sequelize.STRING
//           },
//           year: {
//             type: Sequelize.INTEGER
//           }
//         },
//         directors: {
//           director_id: {
//             type: Sequelize.BIGINT.UNSIGNED,
//             autoIncrement: true,
//             primaryKey: true
//           },
//           director_name: {
//             type: Sequelize.STRING
//           }
//         }
//       }
// }

const fs = require('fs')
var Sequelize = require('sequelize')
function dataInsert(data) {
    var connection = new Sequelize('moviesData', 'shubham', 'Shubham@123', {
        dialect: 'mysql',
        pool: {
            max: 50,
            min: 0,
            idle: 1000
        }
    })
    var movies = connection.define('movies', {
        Rank: {
            type: Sequelize.INTEGER,
        },
        Title:{
           type:Sequelize.STRING,
           primaryKey: true
        },
        Description: Sequelize.TEXT,
        Runtime: Sequelize.INTEGER,
        Genre: Sequelize.STRING,
        Rating: Sequelize.FLOAT,
        Metascore: {
            type: Sequelize.STRING
        },
        Votes: Sequelize.INTEGER,
        Gross_Earning_in_Mil: {
            type: Sequelize.STRING
        },
        // Director: {
        //     type:Sequelize.INTEGER,
        //     references:'directors',
        //     referencesKey: 'id'
        // },
        Director:Sequelize.INTEGER,
        Actor: Sequelize.STRING,
        Year: Sequelize.INTEGER
    }, { timestamps: false })
    connection
        .sync({
            force: true
        })
        .then(function() {
            movies.bulkCreate(data, { force: false })
                .then((insertedData) => {
                    console.log("data inserted..")
                }).catch((err) => {
                    console.log(err)
                });
        }).catch((err) => {
            console.log(err)
        });
     console.log(data)
}
fs.readFile('../data/movies.json', (err, data) => {
    if (err) {
        console.log("erro");
    } else {
        data = JSON.parse(data)
        val = data.reduce((previous, current) => {
            previous.push(current.Director)
            return previous
        }, [])
        val = [...new Set(val)]
            // console.log(val)
        var count = 1;
        var obj = {}
        var obj2 = {}
        var arr = []
        val.forEach((element) => {
            obj[count] = element
            arr.push(obj)
            count += 1
            obj = {}
        })
        count = 1
        val.forEach((element) => {
                obj2[element] = count
                count += 1
            })
            // console.log(data)
        for (let i = 0; i < data.length; i++) {
            data[i].Director = obj2[data[i].Director]
        }
        //console.log(arr)
       // console.log(data)
        dataInsert(data)
        //console.log(data)
        //console.log(obj2)
    }
})
    
