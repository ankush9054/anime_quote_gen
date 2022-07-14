import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quote.css";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayofQuotes = [];
    try {
      await axios
        .get("https://animechan.vercel.app/api/random")
        .then((response) => {
          const data = response.data;
          arrayofQuotes = data;
        });
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayofQuotes.quote);
      setAuthor(arrayofQuotes.character);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="App">
      <div className="quoteBox">
        <div className="container">
          <div className="quote">
            <h2>{quote}</h2>
          </div>
          <div className="quoteButton">
            <button onClick={quoteAPI}>New Quote</button>
          </div>
          <div className="author">
            <h4>{author}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
