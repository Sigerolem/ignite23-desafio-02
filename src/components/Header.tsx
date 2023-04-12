import { MapPin, ShoppingCart } from 'phosphor-react'
import logoSvg from '../assets/logo-coffee-delivery.svg'
import styles from './Header.module.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartItems } = useContext(CartContext)

  return (
    <header className={styles.header} >
      <NavLink to={"/"} >
        <img src={logoSvg} alt="Logotipo da marca com um copo de café" title="Coffee Delivery" />
      </NavLink>

      <div className={styles.buttonsWrapper}>
        <button>
          <MapPin weight='fill' size={22} />
          <span>Porto Alegre, RS</span>
        </button>
        <NavLink to={"/checkout"}>
          <button>

            <ShoppingCart weight='fill' size={22} />
            {
              cartItems.length > 0 &&
              <strong>{cartItems.length}</strong>
            }
          </button>
        </NavLink>
      </div>
    </header>
  )
}