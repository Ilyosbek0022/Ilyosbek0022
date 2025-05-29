import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [mapUchun, setProduct] = useState([]);
  const [card, setCard] = useState([]);
  const [off, CardOn] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setProduct(res.data.categories);
      });
  }, []);
  const adderbek = (item) => {
    setCard([...card, item]);
    toast.success("glavniy......glavniy......glavniy!!!");
  };
  const display = () => {
    CardOn(!off);
  };
  return (
    <div className="glavniy">
      <header onClick={display}>
        <img src="korzinka.png" alt="kArzinka" />
      </header>
      {mapUchun.map((a, index) => (
        <div className="cardbek" key={index}>
          <p>{a.idCategory}</p>
          <h1>{a.strCategory}</h1>
          <img src={a.strCategoryThumb} alt="" />
          <span>{a.strCategoryDescription}</span>
          <button onClick={() => adderbek(a)}>TAP TAP </button>
        </div>
      ))}

      <ToastContainer />
      {off && (
        <div className="glav-card">
          {card.map((a, index) => (
            <div className="carT" key={index}>
             <p>{a.idCategory}</p>
          <h1>{a.strCategory}</h1>
          <img src={a.strCategoryThumb} alt="" />
          <span>{a.strCategoryDescription.slice(0,102)}</span>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="link">
          <button className="buy">BUYbek</button></a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
