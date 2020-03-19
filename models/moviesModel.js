const Sequelize = require('sequelize')
var connection = new Sequelize('moviesData', 'shubham', 'Shubham@123', {
    dialect: 'mysql',
    pool: {
        max: 50,
        min: 0,
        idle: 1000
    }
})
module.exports.movies = connection.define('movies', {
    Rank: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Title: Sequelize.STRING,
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
    Director: Sequelize.INTEGER,
    Actor: Sequelize.STRING,
    Year: Sequelize.INTEGER
}, {
    timestamps: false
})
