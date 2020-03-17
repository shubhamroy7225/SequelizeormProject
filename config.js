module.exports = {
    mysql: {
        host:process.env.MYSQL_HOST,
        database:process.env.MYSQL_DATABASE,
        username:process.env.MYSQL_USERNAME,
        password:process.env.MYSQL_PASSWORD,
        timeout:1000,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        },
    },  
    port:process.env.PORT || 5000,
};