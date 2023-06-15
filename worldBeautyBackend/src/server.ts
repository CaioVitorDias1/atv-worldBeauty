import express, {NextFunction, Request, Response} from 'express';
import db from './config/database.config';
import Router from './router/routes'

const app = express()
const port = 9000


db.sync().then(()=>{
    console.log("connected to database")
})
app.use(express.json())

app.use("/api/cliente", Router)

app.listen(port, ()=>{
    console.log("server is running on port " + port)
})