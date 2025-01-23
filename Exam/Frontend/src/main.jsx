import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoritesProvider from './Context/FavoritesContext.jsx'
import ProductProvider from './Context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ProductProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ProductProvider>
  </>,
)
