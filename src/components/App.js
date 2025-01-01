import React, { useState } from "react";
import "./App.css";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([
    "all",
    ...new Set(items.map((item) => item.category)),
  ]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const filteredItems = items.filter((item) => item.category === category);
      setMenuItems(filteredItems);
    }
  };

  return (
    <div className="app">
      <header className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            id={`filter-btn-${index}`}
            className="category-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div id="main" className="menu">
        {menuItems.map((item) => (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
