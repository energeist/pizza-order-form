import './OrderForm.css';

import { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [pepperoni, setPepperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onions, setOnions] = useState(false);

  return (
    <div className="PizzaForm">
      <h1>Pizza Order Form</h1>
      <div className="form-group">
        <form>
          <label>
            First Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={pepperoni}
              onChange={() => setPepperoni(!pepperoni)}
            />
            Pepperoni
          </label>
          <label>
            <input
              type="checkbox"
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            Sausage
          </label>
          <label>
            <input
              type="checkbox"
              checked={peppers}
              onChange={() => setPeppers(!peppers)}
            />
            Peppers
          </label>
          <label>
            <input
              type="checkbox"
              checked={onions}
              onChange={() => setOnions(!onions)}
            />
            Onions
          </label>
          <button type="submit" value="Submit Order" />
        </form>
        <div className="order-summary">
          <h2>Order Summary</h2>
          {name && <p>Name: {name}</p>}
          {pepperoni && <p>Pepperoni ✅</p>}
          {sausage && <p>Sausage ✅</p>}
          {peppers && <p>Peppers ✅</p>}
          {onions && <p>Onions ✅</p>}
        </div>
      </div>
    </div>
  );
}

export default OrderForm;