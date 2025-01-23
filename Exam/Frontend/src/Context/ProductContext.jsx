import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export  let ProductContext = createContext()

function ProductProvider({ children }) {

    let [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(res => setProducts(res.data))
    }, [products])

    let value = {
        products,
        setProducts
    }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export default ProductProvider