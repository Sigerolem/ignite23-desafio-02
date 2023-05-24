import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import styles from './Success.module.css'
import { useContext, useEffect } from 'react'
import { PurchaseContext } from '../context/PurchaseContext'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const { address, paymentMethod } = useContext(PurchaseContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (address.street === undefined || paymentMethod === undefined) {
      navigate('/')
    }
  }, [])
  return (
    <main className={styles.successContainer} >
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <div className={styles.gradientBorder} >
          <MapPin weight='fill' size={16} style={{ backgroundColor: 'var(--brand-purple)' }} />
          <div>
            <p>Entrega em <strong>{`${address.street}, ${address.number}`}</strong></p>
            <p>{`${address.district} - ${address.city}, ${address.state}`}</p>
          </div>
          <Timer weight='fill' size={16} style={{ backgroundColor: 'var(--brand-yellow)' }} />
          <div>
            <p>Previsão de entrega</p>
            <p><strong>20 min - 30 min</strong></p>
          </div>
          <CurrencyDollar weight='fill' size={16} style={{ backgroundColor: 'var(--brand-yellow-dark)' }} />
          <div>
            <p>Pagamento na entrega</p>
            <p><strong>{paymentMethod}</strong></p>
          </div>
        </div>
        <img src="../success-banner.png" alt="Imagem de um entregadore em uma motoneta" />
      </div>
    </main>
  )
}