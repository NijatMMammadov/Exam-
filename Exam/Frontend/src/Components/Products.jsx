import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router';
import { FavoritesContext } from '../Context/FavoritesContext';
import Swal from 'sweetalert2'
import { BasketContext } from '../Context/BasketContext';

function Products() {

    let { products, setProducts } = useContext(ProductContext)
    let { favorites, setFavorites } = useContext(FavoritesContext)
    let {basket,setBasket}=useContext(BasketContext)

    let navigate = useNavigate()

    function handleNavigateDetail(id) {
        navigate(`/detail/${id}`)
    }

    function handleAddFav(product) {
        let findFavorites = favorites.find(favorit => favorit._id !== product._id)
        if (findFavorites) {
            Swal.fire({
                title: "Already added to Wishlist",
                icon: "question",
                timer:2000
            });
        } else {
            Swal.fire({
                title: "Add to Wishlist!",
                icon: "success",
                draggable: true,
                timer: 1500
            });
            setFavorites([...favorites, product])
        }
    }

    // function handleAddBasket(product){
    //     let findBasket = basket.find(item => item._id !== product._id)
    //     if (findBasket) {
    //         console.log("1");
    // }else{
    //     setBasket([...basket,product])
    // }


    let [search, setSearch] = useState("")
    let filteredSearch = products.filter(product => {
        return product.name && product.name.toLowerCase().includes(search.toLocaleLowerCase())
    })


    return (
        <>
            <section id='products'>
                <div className="producs contain">
                    <div className='pr-title'>
                        <hr className='pr-hr' />
                        <h3>
                            Featured Products
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
                                            <button onClick={() => handleNavigateDetail(product._id)} className='prod-btn'>
                                                Detail
                                            </button>
                                            <IconButton onClick={() => handleAddFav(product)}>
                                                <FavoriteBorderIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleAddBasket(product)}>
                                                <ShoppingCartIcon />
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

export default Products
