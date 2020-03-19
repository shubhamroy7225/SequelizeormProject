const fileName = "moviesfunction.js";
const { QueryTypes } = require("sequelize")
const fs = require('fs')
var Sequelize = require('sequelize')
//const consoles = require('./logger')
const models = require('../models/moviesModel.js')
    // const fileName = "sqlQueryFile.js";
var connection = new Sequelize('moviesData', 'shubham', 'Shubham@123', {
    dialect: 'mysql',
    pool: {
        max: 50,
        min: 0,
        idle: 1000
    }
})
module.exports.movieTitle = function movieTitle() {
  return new Promise((resolve, reject) => {
      models.movies.findAll({
              attributes: ['Title']
          }).then((data) => {
              resolve(data)
          })
          .catch((data) => {
              reject(data)
          })
  })
}
module.exports.movieId=function movieId(id){
  return new Promise((resolve,reject)=>{
      models.movies.findAll({
          attributes:['title'],
          where:{
              rank:id
          }
      }).then((data)=>{
          resolve(data)
      })
      .catch((data)=>{
          reject (data)
      })
  })
}
module.exports.movieInsert=function movieInsert(info){
  return new Promise((resolve,reject)=>{
      
      models.movies.create({
          "Rank":info["Rank"],
          "Title":info["Title"]

      })
  .then((data)=>{
      resolve(data)
  })
  .catch((data)=>{
      reject(data)
  })
})
}
module.exports.updateMovie=function updateMovie(id,info){
  return new Promise((resolve,reject)=>{
      models.movies.update({"Title":info["Title"]},{where:{rank:id}})
      .then((data)=>{
          resolve(data)
      })
      .catch((data)=>{
          reject(data)
      })
  })
}
module.exports.deleteMovie=function deleteMovie(id){
  return new Promise((resolve,reject)=>{
      models.movies.destroy({
          where:{rank:id}
      })
      .then((data)=>{
          resolve(data)
      })
      .catch((data)=>{
          reject(data);
      })
  })
}

