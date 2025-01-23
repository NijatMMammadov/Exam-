import React, { useContext } from 'react'
import { Helmet } from "react-helmet"
import { ProductContext } from '../../Context/ProductContext'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect } from 'react';

function AddProduct() {

    let { products, setProducts } = useContext(ProductContext)

    useEffect(() => {
    }, [products])

    function handleDeleteProduct(id) {
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(res => {
                let deleteProduct=products.filter(product=>product.id!==id)
                setProducts(deleteProduct)
            })
    }
    if (products.length < 1) {
        return <h1 style={{ textAlign: "center", fontSize: "48px", margin: "300px" }}>No Products</h1>
    }
    return (
        <>
            <Helmet>
                <title> Add Product</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <div className='contain'>
                <h1 style={{ textAlign: "center", margin: "100px auto" }}>
                    Products
                </h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.map((product) => (
                                    <TableRow
                                        key={product._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {product.name}
                                        </TableCell>
                                        <TableCell align="center">{product.title}</TableCell>
                                        <TableCell align="center"><img style={{ width: "20%" }} src={product.image} alt="" /></TableCell>
                                        <TableCell align="center"><b>{product.price} $</b></TableCell>
                                        <TableCell align="center"><button onClick={() => handleDeleteProduct(product._id)} className='btn-delete'>Delete</button></TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default AddProduct
