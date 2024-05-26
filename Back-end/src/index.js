require('dotenv').config();
const express = require('express');
var cors = require('cors')
const { connectionToDb } = require('./config/dbConfig');
const { userRouter } = require('./routes/user.router');
const { dataRouter } = require('./routes/data.routes');

const app = express();


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send("this is home");
});

app.use("/user",userRouter)
app.use("/dataInfo",dataRouter)





app.listen(process.env.port, async()=>{
    try {
        await connectionToDb();
        console.log(`server is running on port ${process.env.port}`)

    } catch (error) {
       console.error("unable to port") 
    }
})