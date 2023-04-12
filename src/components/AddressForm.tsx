import { useFormContext } from "react-hook-form"

import styles from './AddressForm.module.css'
import { AddressFormData } from "../pages/Checkout"
import { Input } from "./Input"

export function AddressForm() {
  const { watch, formState: { errors } } = useFormContext<AddressFormData>()

  const showOptionalText = (watch('complement') ?? '').length === 0

  return (
    <form className={styles.form}>
      <Input placeholder="CEP" name="zip" error={errors.zip} />
      <Input placeholder="Rua" name="street" error={errors.street} />
      <Input placeholder="Número" name="number" error={errors.number} />
      <Input placeholder="Complemento" name="complement" error={errors.complement} showOptionalText={showOptionalText} />
      <Input placeholder="Bairro" name="district" error={errors.district} />
      <Input placeholder="Cidade" name="city" error={errors.city} />
      <Input placeholder="UF" name="state" error={errors.state} />
    </form>
  )
}