import express from "express"
const app = express()
import cors from "cors"

app.use(express.json())
app.use(cors())

import "./config/config.js"
import { route } from "./router/ProductRouter.js"

app.use("/products",route)

app.listen(3000,()=>{
    console.log("3000 port din");
})