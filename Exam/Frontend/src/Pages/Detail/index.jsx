import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Helmet } from "react-helmet"

function Detail() {

  let { id } = useParams()

  let [product, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setProducts(res.data.data))
  }, [])


  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <hr />

      <div className='line-center'>
        <div className='product-card' style={{ width: "20%" }}>
          <div key={product._id} className='product-card'>
            <div>
              <img style={{ width: "100%" }} src={product.image} />
            </div>
            <div className='card-content'>
              <h3>
                <b>
                  {product.name}
                </b>
              </h3>
              <p>
                {product.title}
              </p>
              <p style={{ color: "rgb(128, 120, 235)" }}>
                <b>
                  $ {product.price}
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />

    </>
  )
}

export default Detail
