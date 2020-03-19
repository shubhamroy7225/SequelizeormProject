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
module.exports.getAllMovies = function getAllMovies() {
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
module.exports.getMovieWithId=function getMovieWithId(id){
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
module.exports.addNewMovie=function addNewMovie(info){
  return new Promise((resolve,reject)=>{
      
      models.movies.create({
          "id":info["id"],
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

