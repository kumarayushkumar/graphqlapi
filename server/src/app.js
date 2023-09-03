import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from '../src/schema/schema.js'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

//connect to database
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//allow cross-origin requests
app.use(cors())


app.use('/', graphqlHTTP({
  schema: schema,
  pretty: true,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(process.env.PORT, (req, res) => {
  console.log(`listening on port ${process.env.PORT}`)
  console.log(res)
  console.log(req)
})

