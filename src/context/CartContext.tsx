import { ReactNode, createContext, useState } from "react";

type CartItem = {
  id: string,
  coffeeId: string,
  coffeeName: string,
  coffeeImgSrc: string,
  coffeePrice: number,
  amount: number
}

interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (newItem: CartItem) => void;
  removeItemFromCart: (itemId: string) => void;
  alterItemAmountFromCart: (itemId: string, newAmount: number) => void;
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState([] as CartItem[])

  function addItemToCart(newItem: CartItem) {
    setCartItems(prev => ([...prev, newItem]))
  }

  function removeItemFromCart(itemId: string) {
    setCartItems(prev => prev.filter(cartItem => (cartItem.id !== itemId)))
  }

  function alterItemAmountFromCart(itemId: string, newAmount: number) {
    setCartItems(prev => prev.map(cartItem => (
      cartItem.id === itemId ?
        { ...cartItem, amount: newAmount } :
        { ...cartItem }
    )))
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, alterItemAmountFromCart, clearCart }} >
      {children}
    </CartContext.Provider>
  )
}