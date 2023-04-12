import { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { CartItem } from '../components/CartItem'
import { AddressForm } from '../components/AddressForm'

import { CartContext } from '../context/CartContext'
import { Address, PurchaseContext } from '../context/PurchaseContext'

import styles from './Checkout.module.css'

export interface AddressFormData extends Address {
  complement?: string;
}

const addressFormSchema = z.object({
  zip: z.string().min(1, 'Preencha o CEP').regex(RegExp(/^[0-9]{5}\-[0-9]{3}$|^[0-9]{8}$/), 'CEP inválido'),
  street: z.string().min(3, 'Preencha a rua'),
  number: z.string().min(1, 'Preencha o número'),
  complement: z.string().optional(),
  district: z.string().min(3, 'Preencha o bairro'),
  city: z.string().min(3, 'Preencha a cidade'),
  state: z.string().min(2, 'Preencha o estado')
})

export function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState(-1)

  const { cartItems, clearCart } = useContext(CartContext)
  const { confirmPurchase } = useContext(PurchaseContext)

  const addressForm = useForm<AddressFormData>({
    defaultValues: {
      zip: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: ''
    },
    resolver: zodResolver(addressFormSchema)
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/')
    }
  }, [cartItems])

  function submitForm(data: AddressFormData) {
    const paymentMethods = ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']
    confirmPurchase(data, paymentMethods[selectedPayment])
    navigate('/checkout/success')
    clearCart()
  }

  function handleSelectPayment(payment: number,) {
    setSelectedPayment(payment)
  }

  const itemsTotalPrice = cartItems.reduce((acc, item) => ((item.amount * item.coffeePrice) + acc), 0)

  return (
    <main className={styles.checkout} >
      <section className={styles.purchaseInfo}>
        <h3>Complete seu pedido</h3>
        <div className={styles.addressContainer} >
          <header>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço nde deseja receber seu pedido</span>
            </div>
          </header>
          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>
        </div>

        <div className={styles.paymentContainer} >
          <header>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </header>
          <div>
            <button onClick={() => { handleSelectPayment(0) }} className={selectedPayment === 0 ? styles.selectedButton : ''} >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </button>
            <button onClick={() => { handleSelectPayment(1) }} className={selectedPayment === 1 ? styles.selectedButton : ''} >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>
            <button onClick={() => { handleSelectPayment(2) }} className={selectedPayment === 2 ? styles.selectedButton : ''} >
              <Money size={16} />
              DINHEIRO
            </button>
          </div>
        </div>
      </section>

      <section className={styles.cartInfo}>
        <h3>Cafés selecionados</h3>
        <div className={styles.cartContainer}>
          {cartItems.map(item => (
            <CartItem key={item.id} itemId={item.id} itemImgSrc={item.coffeeImgSrc} itemAmount={item.amount} itemName={item.coffeeName} itemPrice={item.coffeePrice} />
          ))}
          <footer>
            <div>
              <p>Total de itens</p>
              <p>R$ {(itemsTotalPrice / 100).toFixed(2).replace('.', ',')}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {((itemsTotalPrice + 350) / 100).toFixed(2).replace('.', ',')}</strong>
            </div>
          </footer>
          <form onSubmit={addressForm.handleSubmit(submitForm)}>
            <button type="submit" disabled={selectedPayment === -1} title={selectedPayment === -1 ? "Escolha o método de pagamento" : ""} >
              CONFIRMAR PEDIDO
            </button>
          </form>
        </div>

      </section>
    </main>
  )
}