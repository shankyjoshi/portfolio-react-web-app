import axios from 'axios'
import { useState } from 'react'

const Checkout = () => {
  const [monthly, setMonthly] = useState(false)
  const [yearly, setYearly] = useState(false)
  const [item, setItem] = useState(null)

  const handleClick = async (e) => {
    e.preventDefault()

    if (!monthly && !yearly) {
      window.alert('Please select an option!!!')
      return
    }

    try {
        const response = await axios.post("/api/checkout-page", {
          items: [item]
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (response.data.url) {
          window.location = response.data.url;
        }
    } catch (error) {
        console.error(error.response.data.error);
    }
  }
  
  return(
      <div>
        <form>
          <label><input type="radio" name="subscription" value="monthly" onClick={() => {
            setMonthly(true)
            setYearly(false)
            setItem({id: 1, quantity: 1})
          }} />Monthly ($5)</label><br />
          <label><input type="radio" name="subscription" value="yearly" onClick={() => {
            setMonthly(false)
            setYearly(true)
            setItem({id: 2, quantity: 1})
          }} />Yearly ($50)</label><br />
          <button id="checkoutButton" onClick={handleClick}>Checkout</button>
        </form>
      </div>
  )
}

export default Checkout