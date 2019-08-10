const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const config = require('./config.json');
const webhookLineRouter = require('./router/webhook.router');
const data = [];
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use("/webhook", webhookLineRouter);

app.listen(process.env.PORT || config.port);
console.log("My Service is listening to port " + config.port);