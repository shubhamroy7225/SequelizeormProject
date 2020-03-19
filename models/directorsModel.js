const Sequelize = require('sequelize')
var connection = new Sequelize('moviesData', 'shubham', 'Shubham@123', {
    dialect: 'mysql',
    pool: {
        max: 50,
        min: 0,
        idle: 1000
    }
})

module.exports.directors = connection.define('directors', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    director: Sequelize.STRING
}, {
    timestamps: false
});
