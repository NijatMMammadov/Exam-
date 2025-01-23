import express from "express"
import { ProductController } from "../controllers/ProductController.js"

export let route=express.Router()

route.get("/",ProductController.getAll)
route.get("/:id",ProductController.getById)
route.delete("/:id",ProductController.deleteProduct)
route.post("/",ProductController.postProduct)

