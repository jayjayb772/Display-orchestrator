const subscriptions = {};
const crypto = require("crypto");
const webpush = require("web-push");

const vapidKeys = JSON.parse(process.env.vapidKeys)

webpush.setVapidDetails("mailto:jayjayb100@msn.com", vapidKeys.publicKey, vapidKeys.privateKey);

function createHash(input) {
    const md5sum = crypto.createHash("md5");
    md5sum.update(Buffer.from(input));
    return md5sum.digest("hex");
}

function handlePushNotificationSubscription(req, res) {
    const subscriptionRequest = req.body;
    const susbscriptionId = createHash(JSON.stringify(subscriptionRequest));
    console.log(subscriptionRequest)
    console.log(req)
    console.log(susbscriptionId)
    subscriptions[susbscriptionId] = subscriptionRequest;
    res.status(201).json({ id: susbscriptionId });
}

function sendPushNotification(req, res) {
    const subscriptionId = req.params.id;
    const pushSubscription = subscriptions[subscriptionId];
    webpush
        .sendNotification(
            pushSubscription,
            JSON.stringify({
                title: "New Product Available ",
                text: "HEY! Take a look at this brand new t-shirt!",
                tag: "new-product"
            })
        )
        .catch(err => {
            console.log("error")
            console.log(err);
        });

    res.status(202).json({});
}

module.exports = { handlePushNotificationSubscription, sendPushNotification };