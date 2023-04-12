import { FieldError, useFormContext } from "react-hook-form"

import styles from './Input.module.css'
import { AddressFormData } from "../pages/Checkout";
import { ChangeEvent } from "react";

interface InputProps {
  type?: string
  name: 'zip' | 'street' | 'number' | 'complement' | 'district' | 'city' | 'state';
  placeholder: string;
  error: FieldError | undefined;
  showOptionalText?: boolean
}

export function Input({ name, placeholder, type = 'text', error, showOptionalText = false }: InputProps) {
  const { register } = useFormContext<AddressFormData>()

  function zipMask(e: ChangeEvent<HTMLInputElement>) {
    let value = e.target.value
    value = value.replace(/\D/g, '')
    value = value.replace(/([0-9]{5})/g, '$1-')
    value = value.replace(/--/g, '-')
    e.target.value = value
  }

  return (
    <div className={styles.inputWrapper} style={{ gridArea: name }} >
      {name === 'zip' ?
        <input type={type} placeholder={placeholder} {...register(name, { onChange: zipMask, maxLength: 9 })} /> :
        <input type={type} placeholder={placeholder} {...register(name)} />
      }
      {showOptionalText ?
        <span>Opicional</span> :
        ''
      }
      {
        error == undefined ?
          '' :
          <p>{error.message}</p>
      }
    </div>
  )
}