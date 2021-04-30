import React, {useEffect} from 'react'





export const required = value => (value || typeof value === 'number' ? undefined : 'Обязательное поле')
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Некорректный email'
    : undefined














