    
var member  = require('../models/Directors');    
    
    
var memberController = {   
    getDirectors(req,res){    
    Directors.findAll()    
    .then(function(dataa){    
        res.render('home',{data:dataa})    
    })    
  .catch(error=>console.log(`error occurred`,error));    
    },    
    // addDirectors(req,res){    
    //     console.log(req.body)    
    //       member.create({name:req.body.name,country:req.body.country,    
    //       language:req.body.language,salary:req.body.salary})    
    //     .then(function(dataa){res.redirect('/member/getall')})    
    //     .catch(function(error){    
    //     console.log(`error occured`,err)    
    //     });    
    //   },     
    // updateDirectors(req,res){    
    //     console.log(req.body)    
    //     const query={    
    //         name:req.body.name,    
    //         country:req.body.country,    
    //         language:req.body.language,    
    //         salary:req.body.salary    
    //     }    
    //     member.update(query,{where:{mid:req.body.id}})    
    //     .then(function(data){    
    //       res.redirect('/member/getall')    
    //     })    
    //     .catch(function(error){    
    //     console.log('error occured',error)    
    //     });      
    // },    
    // deleteDirectors(req,res){    
    //   console.log('delid',req.params.id)    
    //     member.destroy({where:{mid:req.params.id}})    
    //     .then(function(dataa){    
    //       res.redirect('/member/getall')    
    //     })    
    //     .catch(function(error){    
    //      console.log('error occured',error)    
    //   });    
    // },    
}    
module.exports={
    getDirectors
}
    