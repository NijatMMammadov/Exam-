import React from 'react'
import Hero from '../../Components/Hero'
import Products from '../../Components/Products'
import { Helmet } from "react-helmet"
import Collections from '../../Components/Collections'
import Sale from '../../Components/Sale'
function Home() {
    return (
        <>
            <Helmet>
                <title> Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <main>
                <Hero />
                <Collections/>
                <Products />
                <Sale/>
            </main>
        </>
    )
}

export default Home
