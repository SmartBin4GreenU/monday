const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let bears = [ {id:1, name:'Pooh', weight: 70} ,
              {id:2, name:'Winnie', weight: 60}  ]

app.use( express.static('public'))

app.get('/bears', (req,res) => {
    res.send(bears)
} )

app.post('/bears',
    bodyParser.urlencoded({extended:false}),
    (req,res) => {
        const bear = {}
        bear.id = bears.length+1
        bear.name = req.body.name
        bear.weight = req.body.weight
        bears.push(bear)
        res.send(bears)
} )

app.listen(8888)