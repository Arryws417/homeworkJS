const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const cfg = require('./config')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const connect = mysql.createConnection({
    host: cfg.host,
    user: cfg.user,
    password: cfg.password,
    database: cfg.database,
})

connect.connect(error => {
    if(error) throw error;
    console.log("Terhubung ke Database")
})

app.get('/', (req,res) => {
    res.json({'message': 'haii ,kamu berhasil akses dari port 3001'})
})

app.listen(3001, () => { console.log('Menghubungkan ke port 3001') })

