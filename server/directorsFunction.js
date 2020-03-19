const fileName = "directorsFunction.js";
const { QueryTypes } = require("sequelize")
const fs = require('fs')
var Sequelize = require('sequelize')
//const consoles = require('./logger')
const models = require('../models/directorsModel.js')
    // const fileName = "sqlQueryFile.js";
var connection = new Sequelize('moviesData', 'shubham', 'Shubham@123', {
    dialect: 'mysql',
    pool: {
        max: 50,
        min: 0,
        idle: 1000
    }
})
module.exports.allDirectors = function allDirectors() {
    return new Promise((resolve, reject) => {
        models.directors.findAll({
                attributes: ['director']
            }).then((data) => {
                resolve(data)
            })
            .catch((data) => {
                reject(data)
            })
    })
}
module.exports.directorId=function directorId(director_id){
    return new Promise((resolve,reject)=>{
        models.directors.findAll({
            attributes:['director'],
            where:{
                id:director_id
            }
        }).then((data)=>{
            resolve(data)
        })
        .catch((data)=>{
            reject (data)
        })
    })
}
module.exports.directorInsert=function directorInsert(info){
    return new Promise((resolve,reject)=>{
        models.directors.create({
            "director":info["director"]

        })
    .then((data)=>{
        resolve(data)
    })
    .catch((data)=>{
        reject(data)
    })
})
}
module.exports.updateDirectors=function updateDirectors(directorid,info){
    return new Promise((resolve,reject)=>{
        models.movies.update({"director":info["director"]},{where:{id:directorid}})
        .then((data)=>{
            resolve(data)
        })
        .catch((data)=>{
            reject(data)
        })
    })
}
module.exports.deleteDirector=function deleteDirectorid(director_id){
    return new Promise((resolve,reject)=>{
        models.directors.destroy({
            where:{id:director_id}
        })
        .then((data)=>{
            resolve(data)
        })
        .catch((data)=>{
            reject(data);
        })
    })
}
