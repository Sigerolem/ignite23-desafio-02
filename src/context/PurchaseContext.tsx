import { ReactNode, createContext, useState } from "react";

export type Address = {
  zip: string,
  street: string,
  number: string,
  district: string,
  city: string,
  state: string
}

interface PurchaseContextType {
  address: Address,
  paymentMethod: string,
  confirmPurchase: (address: Address, paymentMethod: string) => void
}

interface PurchaseContextProviderProps {
  children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextType)


export function PurchaseContextProvider({ children }: PurchaseContextProviderProps) {
  const [address, setAddress] = useState({} as Address)
  const [paymentMethod, setPaymentMethod] = useState('')

  function confirmPurchase(address: Address, paymentMethod: string) {
    setAddress(address)
    setPaymentMethod(paymentMethod)
  }

  return (
    <PurchaseContext.Provider value={{ address, paymentMethod, confirmPurchase }} >
      {children}
    </PurchaseContext.Provider>
  )
}