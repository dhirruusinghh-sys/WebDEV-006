
import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/auth.route.js";
dotenv.config()

const app = express();

app.use(express.json())

app.get("/" , (req,res) => {
    console.log("Server started")
    res.json({message: "welcome to first backend project "})
})

app.get("/get",(req,res) => {
    console.log(req.body);
    
    res.json("Hello anshu")
})


app.use("/auth",AuthRouter)

const port = process.env.PORT || 5000;

connectDB();
app.listen(port, () =>{
    console.log(`Sever Started at ${port}`);
    
})