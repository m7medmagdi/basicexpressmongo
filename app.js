const express = require('express')
const mongose = require('mongoose')
const app = express()
const taskRoutes = require('./routes/taskRoutes')

const port = 3000;


mongose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
)


const db = mongose.connection;

db.on('error',()=> {
    console.log("Connection Error")
})

db.once('open', ()=> {
    console.log("Connected Success")
})




// app.get('/hello',(requset,response) => {
//     response.send('hello js')
// })

// app.get('/',(requset,response) => {
//     response.send('home from nodejs101')
// })
app.use(express.json());
app.use(taskRoutes)
app.listen(port, () => {
    console.log("Server Started 3000")
})