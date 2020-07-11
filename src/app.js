const express = require('express')
const request = require('request')
const path = require('path')
const chalk = require('chalk')

const app = express()
app.use(express.static(path.join(__dirname, '../public')))

// app.get('', (req, res) => {
//     res.render('index')
// })

app.listen(8080, () => {
    console.log('Server is rumming')
})