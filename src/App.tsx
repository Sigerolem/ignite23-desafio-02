import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

import { CartContextProvider } from "./context/CartContext"
import { PurchaseContextProvider } from "./context/PurchaseContext"

import './global.css'

export function App() {

  return (
    <BrowserRouter >
      <CartContextProvider>
        <PurchaseContextProvider>
          <Router />
        </PurchaseContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}
