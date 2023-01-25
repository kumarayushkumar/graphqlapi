import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from '../src/schema/schema.js'
import mongoose from 'mongoose';

const app = express()

//connect to database
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: process.env.NODE_ENV === 'development'
}))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
