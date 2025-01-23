import AddProduct from "../Pages/AddProduct";
import Basket from "../Pages/Basket";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import MainRoot from "../Pages/MainRoot";
import NotFound from "../Pages/NotFound";
import Wishlist from "../Pages/Wishlist";

let ROUTER=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/wishlist",
                element:<Wishlist/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
            {
                path:"/detail/:id",
                element:<Detail/>
            },
            {
                path:"/addproduct",
                element:<AddProduct/>
            },
            {
                path:"*",
                element:<NotFound/>
            },
            
        ]
    }
]

export default ROUTER