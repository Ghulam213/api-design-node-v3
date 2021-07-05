import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const logReq = (req, res, next) => {
  console.log(req.body)
  req.message = 'theek hai bhai!'
  next()
}

app.get('/data', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/data', logReq, (req, res) => {
  res.send({ message: req.message })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server live on 3000!')
  })
}
