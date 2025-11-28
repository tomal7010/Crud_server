const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');
const cors = require("cors");


//configure dotenv
dotenv.config();

//rest object
const app = express()


// CORS FIX (important)
app.use(cors({
  origin: [
  "http://localhost:5173",
  "https://frontend-aumv0spg1-tomal7010s-projects.vercel.app"
],

  methods: ["GET", "POST", "PUT", "DELETE"],
}));



//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/email', require("./routes/emailRoutes"));

app.get('/test', (req,res) =>{
    res.status(200).send("<h1>Nodejs Mysql App</h1>")
})

//port
const PORT = process.env.PORT || 8000;

//contidionaly Listen
mySqlPool.query('SELECT 1').then(() => {
//MY SQL
console.log('MYSQL DB Connected');
//listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
})
})
.catch((error) => {
    console.log(error);
})
