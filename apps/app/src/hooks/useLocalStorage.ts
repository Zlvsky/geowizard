import React from 'react'

function dispatchStorageEvent(key: string, newValue: string | null) {
  window.dispatchEvent(new StorageEvent('storage', { key, newValue }))
}

const setLocalStorageItem = (key: string, value: unknown) => {
  const stringifiedValue = JSON.stringify(value)
  window.localStorage.setItem(key, stringifiedValue)
  dispatchStorageEvent(key, stringifiedValue)
}

const removeLocalStorageItem = (key: string) => {
  window.localStorage.removeItem(key)
  dispatchStorageEvent(key, null)
}

const getLocalStorageItem = (key: string): string | null => {
  return window.localStorage.getItem(key)
}

const useLocalStorageSubscribe = (callback: (event: StorageEvent) => void) => {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const getSnapshot = () => getLocalStorageItem(key)

  const store = React.useSyncExternalStore(useLocalStorageSubscribe, getSnapshot)

  const setState = React.useCallback(
    (v: React.SetStateAction<T>) => {
      try {
        const nextState =
          typeof v === 'function'
            ? (v as (prevState: T) => T)(JSON.parse(store as string))
            : v

        if (nextState === undefined || nextState === null) {
          removeLocalStorageItem(key)
        } else {
          setLocalStorageItem(key, nextState)
        }
      } catch (e) {
        console.warn(e)
      }
    },
    [key, store]
  )

  React.useEffect(() => {
    if (getLocalStorageItem(key) === null && typeof initialValue !== 'undefined') {
      setLocalStorageItem(key, initialValue)
    }
  }, [key, initialValue])

  return [store ? (JSON.parse(store) as T) : initialValue, setState]
}
