import React, { useContext, useState } from 'react'
import { FavoritesContext } from '../../Context/FavoritesContext'
import { IconButton } from '@mui/material'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { Helmet } from "react-helmet"

function Wishlist() {

  let { favorites, setFavorites } = useContext(FavoritesContext)
  let [search, setSearch] = useState("")
  let filteredSearch = favorites.filter(favorit => {
    return favorit.name && favorit.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  function handleDeleteFav(id) {
    let deleteFavorite = favorites.filter(favorit => favorit._id == !id)
    setFavorites(deleteFavorite)
  }


  if (favorites.length < 1) {
    return <h1 style={{ textAlign: "center", fontSize: "48px", margin: "300px" }}>Wishlist Empty</h1>
  }


  return (
    <>
      <Helmet>
        <title>Wishlist Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <section id='products'>
        <div className="producs contain">
          <div className='pr-title'>
            <hr className='pr-hr' />
            <h3>
              Wishlist Products
            </h3>
            <input type="text" value={search} placeholder='Search By Name' onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className='product-cards'>
            {
              filteredSearch.map(product => (
                <div key={product._id} className='product-card'>
                  <div className='card-image'>
                    <img src={product.image} alt="" />
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
                    <div className='prod-btns'>
                      <IconButton onClick={() => handleDeleteFav(product._id)}>
                        <HeartBrokenIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              ))

            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist
