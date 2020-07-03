import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header/Header";
import Search from "./components/search/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import Footer from "./components/footer/Footer";

import img from "./assets/img.jpg";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <React.Fragment>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      {query ? (
        <CharacterGrid isLoading={isLoading} items={items} />
      ) : (
        <div className="no-items">
          <img className="img" src={img} alt="" />
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default App;
