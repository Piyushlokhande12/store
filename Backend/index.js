import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import bookroute from "./routes/bookroute.js";
import userroute from "./routes/userroute.js"
import cors from "cors"
const app=express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
res.send("hii");
});

app.use("/book",bookroute);
app.use('/user',userroute);

const PORT = process.env.PORT || 3000
  connectDB();
app.listen(PORT, () => {

  console.log(`Server running on ${PORT}`);
});
