const express = require("express");
const connections = require("../config/database");

const con = connections.DatabaseConnection;
const router = express.Router();

router.get('/', (req, res) => {
    con.getConnection((err) => {
        if(err)
        {
            console.error("Error : ", err)
        }
        else
        {
            console.error("Successflly connected with databse");
            connections.DatabaseConnection.query("SELECT * FROM Users", (err, result, field) => {
                if(err) throw err
                r = result;
                res.send(result)
                console.log(result)
            } )
        }
    })
})

router.get("/home", (req, res) => {
    res.send("welcome Home")
})

module.exports = router;