require('dotenv').config();
const express = require('express');
const controller = require('./src/main/controllers/controller')
const messagingServiceController = require('./src/main/controllers/messagingServiceController')
const app = express();
const {debuglog} = require('./src/main/util/debugCommands');
const ENV = process.env.ENV;
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const discordController = require("./src/main/controllers/discordController");
const googleHomeController = require("./src/main/util/googleHomeController");
const CTAController = require("./src/main/controllers/CTAController");
const options = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Messaging Service', // Title (required)
            version: '1.0.0', // Version (required)
        },
    },
    // Path to the API docs
    apis: ['./src/main/controllers/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

/**
 * @swagger
 *
 * /:
 *   get:
 *     description: base url
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 */
app.get('/', (req, res) =>{
    debuglog("HOME")
    res.send("Hello World!");
})

app.use('/controller', controller)
app.use('/messaging-service', messagingServiceController)
app.use('/discord', discordController)
app.use('/cta', CTAController)
app.use('/google-home', googleHomeController)

module.exports = app;