import React from 'react'
import { Link, useNavigate } from "react-router"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';


function Navbarr() {

    let navigate=useNavigate()

    function handleNavigateFav(){
        navigate("/wishlist")
    }
    function handleNavigateBasket(){
        navigate("/basket")
    }


    return (
        <> 
            <div className='nvb contain'>
                <div className='nvb-top'>
                    <div className="nvb-icon">
                        <SearchIcon></SearchIcon>
                        <input type="text" placeholder='Search' className='nvb-input' />
                    </div>
                    <div className="nvb-center">
                        <h2>
                            SHOPPERS
                        </h2>
                    </div>
                    <div className='nvb-left'>
                        <IconButton><PersonIcon/></IconButton>
                        <IconButton onClick={()=>handleNavigateFav()}><FavoriteBorderIcon/></IconButton>
                        <IconButton onClick={()=>handleNavigateBasket()}><ShoppingCartIcon/></IconButton>
                    </div>  
                </div>
                <hr />
                <div className='nvb-end'>
                    <div className="nvb-links">
                        <Link className='link'>HOME</Link>
                        <Link className='link'>ABOUT</Link>
                        <Link className='link'>SHOP</Link>
                        <Link className='link'>CATALOGUE</Link>
                        <Link className='link'>CONTACT</Link>
                        <Link className='link'>ADD PRODUCT</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbarr
