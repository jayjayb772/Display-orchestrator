require('dotenv').config();
const express = require('express');
const controller = require('./src/main/controllers/zzz-template/controller')
const messagingServiceController = require("./src/main/controllers/MessagingService/subscriptionController")
const app = express();
const {debuglog} = require('./src/main/util/debugCommands');
const ENV = process.env.ENV;
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const discordController = require("./src/main/controllers/Discord/discordController");
const googleHomeController = require("./src/main/controllers/GoogleHome/googleHomeController");
const CTAController = require("./src/main/controllers/CTA/CTAController");
const weatherController = require("./src/main/controllers/Weather/weatherController");
const subscriptionHandler = require("./src/main/subscriptionHandler");
//const displayChatController = require("./src/main/controllers/SendBird/displayChatController");
const options = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Messaging Service', // Title (required)
            version: '1.0.0', // Version (required)
        },
    },
    // Path to the API docs
    apis: ['./src/main/zzz-template/*.js'],
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
    debuglog(req)
    debuglog("HOME")
    res.send("Hello World!");
})

app.use('/messaging-service', messagingServiceController)
app.use('/discord', discordController)
app.use('/cta', CTAController)
app.use('/google-home', googleHomeController)
app.use('/weather', weatherController)
//app.use('/display-chat', displayChatController)

app.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);
app.get("/subscription/:id", subscriptionHandler.sendPushNotification);

module.exports = app;
