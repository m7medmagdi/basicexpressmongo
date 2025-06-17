const express = require('express')
const mongoose = require('mongoose')
const app = express()
const taskRoutes = require('./routes/taskRoutes')

const port = 3000;


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Connection Error', err));

const db = mongoose.connection;

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