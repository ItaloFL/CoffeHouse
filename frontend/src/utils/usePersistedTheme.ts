import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function usePersistedTheme(
  key: string,
  initialValue: any
) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState]
}
