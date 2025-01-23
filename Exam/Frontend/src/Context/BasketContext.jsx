import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export let BasketContext = createContext()

function BasketProvider({children}){

    let localBasket = JSON.parse(localStorage.getItem("basket"))
    let [basket, setBasket] = useState(localBasket ? localBasket : [])

    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(basket))
    },[basket])

    let value={
        basket,
        setBasket
    }

    return<BasketContext.Provider value={value}>{children}</BasketContext.Provider>
}

export default BasketProvider