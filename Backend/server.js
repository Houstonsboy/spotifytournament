
const { createPool } = require('mysql');
const express = require('express');

const app=express();

const databaseConfiguration={
    Host:"127.0.0.1:3306",
    user:"CherryArchives",
    password:"0pdoopd0epdrfepdrf",
    database:"internationalartists" 
}

const connectionpool=createPool(databaseConfiguration);

connectionpool.getConnection((error,connection) => {
    if(error)
    {
        console.log("error in connection ", error.message);
        return;
    }
    console.log("successfull  connection");
});




