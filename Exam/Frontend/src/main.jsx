import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoritesProvider from './Context/FavoritesContext.jsx'
import ProductProvider from './Context/ProductContext.jsx'
import BasketProvider from './Context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <BasketProvider>
      <ProductProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </ProductProvider>
    </BasketProvider>
  </>,
)
