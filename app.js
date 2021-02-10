require('dotenv').config();
const express = require('express');
const messagingServiceController = require("./src/main/controllers/MessagingService/messagingServiceController")
const app = express();
const {debuglog} = require('./src/main/util/debugCommands');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const discordController = require("./src/main/controllers/Discord/discordController");
const googleHomeController = require("./src/main/controllers/GoogleHome/googleHomeController");
const CTAController = require("./src/main/controllers/CTA/CTAController");
const weatherController = require("./src/main/controllers/Weather/weatherController");
const sockjs = require('sockjs');
const cors = require('cors')
//const displayChatController = require("./src/main/controllers/SendBird/displayChatController");
const swagoptions = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Messaging Service', // Title (required)
            version: '1.0.0', // Version (required)
        },
    },
    // Path to the API docs
    apis: ['./src/main/*.js'],
};
const swaggerSpec = swaggerJSDoc(swagoptions);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


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
    debuglog(req)
    debuglog("HOME")
    res.send("Hello World!");
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/cta', CTAController)
app.use('/discord', discordController)
app.use('/weather', weatherController)
app.use('/messaging-service', messagingServiceController)
app.use('/google-home', googleHomeController)
//app.use('/display-chat', displayChatController)


module.exports = app;
