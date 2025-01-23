import React, { useContext } from 'react'
import { Helmet } from "react-helmet"
import { BasketContext } from '../../Context/BasketContext'

function Basket() {

    let { basket, setBasket } = useContext(BasketContext)

    if (basket.length < 1) {
        return <h1 style={{ textAlign: "center", fontSize: "48px", margin: "300px" }}>Basket Empty</h1>
    }

    return (
        <>
            <Helmet>
                <title> Basket</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
        </>
    )
}

export default Basket
