import React from 'react'
import './OrderRefresh.css'

function OrderRefresh() {
    const [refresh, setRefresh] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setRefresh(!refresh);
    }
    
  return (
    <div className="order-refresh">
      <form onSubmit={handleSubmit}>
        <label htmlFor="order-refresh-input">Order Refresh Interval (seconds)</label>
            <input 
                id="order-refresh-input" 
                type="number" 
                min="1" 
                max="60" 
                step="1" 
                defaultValue="15"
                required 
            />
      </form>
    </div>
  )
}

export default OrderRefresh