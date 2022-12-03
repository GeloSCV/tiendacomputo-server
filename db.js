const {Pool}= require('pg');
require('dotenv').config()

const pool= new Pool({
    user: process.env.user_db,
    password:process.env.password_db,
    host:process.env.host_db,
    port: process.env.port_db,
    database:process.env.database_db,
});

module.exports=pool;
