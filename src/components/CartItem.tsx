import { useContext } from "react";
import { Minus, Plus, Trash } from "phosphor-react";
import { CartContext } from '../context/CartContext'

import styles from './CartItem.module.css'

interface CartItemProps {
  itemId: string
  itemName: string
  itemAmount: number
  itemImgSrc: string
  itemPrice: number
}

export function CartItem({ itemName, itemAmount, itemImgSrc, itemPrice, itemId }: CartItemProps) {
  const { alterItemAmountFromCart, removeItemFromCart } = useContext(CartContext)
  function handleSubtractAmount() {
    alterItemAmountFromCart(itemId, (itemAmount - 1))
  }

  function handleAddAmount() {
    alterItemAmountFromCart(itemId, (itemAmount + 1))
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(itemId)
  }

  return (
    <div className={styles.cartItem} >
      <img src={itemImgSrc} alt="" />
      <div>
        <p>{itemName}</p>

        <div>
          <button onClick={handleSubtractAmount}>
            <Minus size={14} weight='bold' />
          </button>
          <span>{itemAmount}</span>
          <button onClick={handleAddAmount}>
            <Plus size={14} weight='bold' />
          </button>
        </div>

        <button onClick={handleRemoveItemFromCart} >
          <Trash size={16} />
          REMOVER
        </button>
      </div>

      <span>R$ {((itemPrice * itemAmount) / 100).toFixed(2).replace('.', ',')}</span>
    </div>
  )
}