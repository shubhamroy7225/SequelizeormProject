
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
    var directors = connection.define('directors', {
        directors_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        director: Sequelize.STRING
    }, { timestamps: false })
    var count = 1
    for (let i = 1; i <= data.length; i++) {
        connection
            .sync({
                force: false
            })
            .then(function() {
                directors.create({
                        id: i,
                        director: data[i - 1]
                    })
                    .then((insertedData) => {
                        console.log("data inserted..")
                    }).catch((err) => {
                        console.log(err)
                    });
            }).catch((err) => {
                console.log("error")
            });
    }
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
        val.forEach((element) => {
            obj[count] = element
            count++
        })
        console.log(obj)
        dataInsert(val)
    }
})

