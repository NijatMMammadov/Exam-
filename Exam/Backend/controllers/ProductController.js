import { ProductModel } from "../models/ProductModel.js"



export let ProductController = {
    getAll: async (req, res) => {
        let products = await ProductModel.find()
        res.send(products)
    },
    getById: async (req, res) => {
        let id = req.params.id
        let myProduct = await ProductModel.findById(id)
        res.send({
            data: myProduct
        })
    },
    deleteProduct: async (req, res) => {
        let id = req.params.id
        await ProductModel.findByIdAndDelete(id)
        res.send({
            message: "Success Delete",
        })
    },
    postProduct: async (req, res) => {
        let newProduct = ProductModel(req.body)
        await newProduct.save()
        res.send({
            message: "Success Post",
            data: req.body
        })
    }
}

