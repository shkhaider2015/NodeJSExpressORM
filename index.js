const express = require('express/');
const routes = require("./routes/routes");
const connections = require("./config/database");
const app = express();
const port = 8000;


app.use("/", routes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});