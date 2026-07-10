import { useState } from 'react'
import './App.css'

const TAX_RATE = 0.025

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }).format(amount)
}

function App() {
  const [price, setPrice] = useState('')

  const basePrice = parseFloat(price) || 0
  const tax1 = basePrice * TAX_RATE
  const tax2 = basePrice * TAX_RATE
  const TotalTax = tax1 + tax2
  const total = basePrice + TotalTax
  const hasPrice = price !== '' && !Number.isNaN(parseFloat(price))

  return (
    <main className="calculator">
      <h1>Kurta Bazaar Tax Calculator</h1>
      <p className="subtitle">Add two 2.5% taxes to the product price</p>

      <div className="results-area">
        {hasPrice && (
          <div className="breakdown">
            <div className="row">
              <span>Original price</span>
              <span>{formatINR(basePrice)}</span>
            </div>
            <div className="row">
              <span>Tax 1 (2.5%)</span>
              <span>{formatINR(tax1)}</span>
            </div>
            <div className="row">
              <span>Tax 2 (2.5%)</span>
              <span>{formatINR(tax2)}</span>
            </div>
            <div className="row subtotal">
              <span>Total tax</span>
              <span>{formatINR(TotalTax)}</span>
            </div>
            <div className="row total">
              <span>Final price</span>
              <span>{formatINR(total)}</span>
            </div>
          </div>
        )}
      </div>

      <label className="input-group" htmlFor="price">
        Product price (INR)
        <input
          id="price"
          type="number"
          min="0"
          step="0.01"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
    </main>
  )
}

export default App
