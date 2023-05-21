import express from 'express'
//comment out when in production
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb'

const url = process.env.MONGODB_URL || 'mongodb://localhost:27017/mernSimpleSetup'
let port = process.env.PORT || 3000

const app = express()
const CURRENT_WORKING_DIR = process.cwd()
//comment out when in production
devBundle.compile(app)
MongoClient.connect(url, (err,db) =>{
    console.log("Connected succesfully to mongodb server")
    db.close()
})

app.get('/', (req,res) => {
    res.status(200).send(template())
})

app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))