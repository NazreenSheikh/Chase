import React, { createContext, useContext, useState, useEffect } from 'react'
const Crypto = createContext()

function CryptoContext({ children }) {
  const [currency, setCurrency] = useState('INR')
  const [symbol, setSymbol] = useState('₹')

  useEffect(() => {
    if (currency === 'INR') {
      setSymbol('₹')
    } else {
      setSymbol('$')
    }
  }, [currency])
  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const useCrypto = () => {
  return useContext(Crypto)
}