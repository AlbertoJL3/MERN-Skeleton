import express from 'express'
//comment out when in production
import devBundle from './devBundle'


const app = express()

//comment out when in production
devBundle.compile(app)