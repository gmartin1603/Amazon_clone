const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HVAOYCknLcIQLHTtUSj3Pl69xA00s64EgOUP3yxankQn6TWaLXDPXG5khotjPKZ5CLhLrfYLBxNe13Fq0tddfcd001bvNxbKp')


//App config
const app = express()

//Middleware

app.use(cors({origin: true}))
app.use(express.json())

//API roots
app.get('/', (req, res) => res.status(200).send('Hello World!'))
app.post('/payments/create', async (req, res) => {
    
    const total = req.query.total
    console.log('payment request recived for this amaount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })
    //OK (created)
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
//Listen command
exports.api = functions.https.onRequest(app)