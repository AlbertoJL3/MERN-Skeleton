import express from 'express'
import devBundle from './devBundle'


const app = express()

devBundle.compile(app)