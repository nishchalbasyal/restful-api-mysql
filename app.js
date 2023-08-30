const express = require("express")
const session = require('express-session')
 


const app = express();
app.use(express.json())
app.use(session({
    secret: 'access-api',
    resave: false,
    saveUninitialized: true
}))

const port = 3000;

const routes = require("./routes");

const db = require('./models')

routes(app)

db.sequelize.sync().then((req)=>{
    app.listen(port, ()=>{
        console.log(`Server is running at ${port}`)
    })
    
})
