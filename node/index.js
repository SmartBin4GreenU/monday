// Source ==> https://github.com/wwarodom/monday

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()

let bears = [{id: 1, name: 'Pooh', weight: 70},
    {id: 2, name: 'Winnie', weight: 60}]

app.use(express.static('public'))

app.use('/api', bodyParser.urlencoded({extended: false}), router)

router.route('/bears')
    .get((req, res) => {
        res.send(bears)
    })

    .post(
        (req, res) => {
            const bear = {}
            bear.id = bears.length + 1
            bear.name = req.body.name
            bear.weight = req.body.weight
            bears.push(bear)
            res.send(bears)
    })

app.listen(8888)