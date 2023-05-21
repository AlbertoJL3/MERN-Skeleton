import express from 'express'
//comment out when in production
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
let port = process.env.PORT || 3000

const app = express()
const CURRENT_WORKING_DIR = process.cwd()
//comment out when in production
devBundle.compile(app)

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