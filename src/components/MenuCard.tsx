import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import styles from './MenuCard.module.css'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export type CoffeeInfo = {
  id: string;
  imgSrc: string;
  name: string;
  description: string;
  tags: string[];
  price: number;
}

interface MenuCardProps {
  coffees: CoffeeInfo[],
  coffeeId: string
}

export function MenuCard({ coffees, coffeeId }: MenuCardProps) {
  const { addItemToCart } = useContext(CartContext)

  const [amountToAdd, setAmountToAdd] = useState(1)

  const { imgSrc, tags, name, description, price } = coffees.find(coffee => coffee.id === coffeeId) ?? coffees[0]

  function formatPrice(price: number) {
    return (price / 100).toFixed(2).replace('.', ',')
  }

  function addAmount() {
    if (amountToAdd === 8) return

    setAmountToAdd(prevState => prevState + 1)
  }

  function subtractAmount() {
    if (amountToAdd === 0) return

    setAmountToAdd(prevState => prevState - 1)
  }

  function handleAddItemToCart() {
    addItemToCart(
      {
        id: (new Date().getTime()).toString(),
        coffeeId: coffeeId,
        amount: amountToAdd,
        coffeeImgSrc: imgSrc,
        coffeeName: name,
        coffeePrice: price
      }
    )
    setAmountToAdd(1)
  }

  return (
    <div className={styles.card} >
      <img src={imgSrc} />
      <div className={styles.tags} >{
        tags.map((tag, index) => (
          <span key={index}>{tag.toLocaleUpperCase()}</span>
        ))
      }</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <footer>
        <span>
          R$ <strong>{formatPrice(price * amountToAdd)}</strong>
        </span>
        <div>
          <button onClick={subtractAmount}>
            <Minus size={14} weight='bold' />
          </button>
          <span>{amountToAdd}</span>
          <button onClick={addAmount}>
            <Plus size={14} weight='bold' />
          </button>
        </div>
        <button onClick={handleAddItemToCart} >
          <ShoppingCartSimple size={22} weight='fill' />
        </button>
      </footer>
    </div>
  )
}