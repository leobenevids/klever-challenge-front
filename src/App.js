import { useState } from "react";

function App() {
  const initialValues = { token: "", balance: "" };
  const [formData, setFormData] = useState(initialValues);

  const items = [];

  const storeData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getData("items");
    if ((items.length = 0)) {
      items.push(formData);
    } else {
      items.concat(formData);
    }
    console.log(formData);

    storeData("items", items);

    setFormData(initialValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Token
          <input
            type="text"
            placeholder="type the Token's name"
            name="token"
            value={formData.token}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Balance
          <input
            type="number"
            placeholder="type the balance"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
