import UpdateItem from "./components/UpdateItem";
import React, { useEffect, useState } from "react";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  const [item, setItem] = useState(null);

  // pass the item to UpdateItem as a prop
  useEffect(() => {
    fetch(`${API_URI}/1`)
      .then((res)=> res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Failed to fetch item", err));
  }, []);

  return (
  <div>
    <h1>Update Door</h1>
    {item ? <UpdateItem item={item}/> : <p>Loading...</p>}
  </div>

  );
}

export default App;
