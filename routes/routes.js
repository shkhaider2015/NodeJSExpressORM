const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const User = require("../models/user/user");
// const HomePage = require("../screens/Home/index.html");

const router = express.Router();
//  router.use(bodyParser.json());
//  router.use(bodyParser.urlencoded({ extended: false }));
const URLencoded = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../screens/Home/index.html"));
})

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../screens/Signup/index.html"));
})

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../screens/Login/index.html"));
})

router.post("/submit-form",URLencoded, (req, res) => {
    // console.log("Request Body : ", JSON.stringify(req.body))
    // res.send(JSON.stringify(req.body))
    console.log(typeof req.body)
    // let body = JSON.stringify(req.body);
    let body = req.body;
    let fullName = body.fullname;
    console.log("name : ", fullName)
    console.dir("Body : ", body)
    let user = User.build({
         fullName : body.fullName,
         email: body.email,
         password: body.password,
         city: body.city
    })
    
    if(user.isNewRecord)
    {
        user.save()
        .then(() => {
            console.log("Si=uccessfully saved")
            res.redirect("/login")
        })
        .catch(err => console.log("Error "))
    }

    
})

module.exports = router;