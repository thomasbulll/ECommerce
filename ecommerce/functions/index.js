const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Imi7HD8suU8NPcreLg6C4udlj7UUJ7rETq8NObZSSDAdtdA5moNhaTUB2mVNp9BK7Rn7s7asy8MhpS28ry6aDvi00j9K39ad5");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.get("/Tom", (request, response) => response.status(200).send("Hello Tom"));

app.post('.payments/create', async (request, response) => {

  const total = request.query.total;

  console.log('Payment Request Recieved for: ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency = "gbp",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})


exports.api = functions.https.onRequest(app);

// http://localhost:5001/ecoomerce-49d45/us-central1/api