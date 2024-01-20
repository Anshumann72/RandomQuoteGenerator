import React from "react";
import "./styles.css";
import { useState } from "react";

export const Quiz = () => {
  const [quote, setQuote] = useState({
    text: "You Have Not Came This Far To Only Come This Far ",
    author: "Zoro",
  });

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const selectedQuote = data[Math.floor(Math.random() * data.length)];
      setQuote(selectedQuote);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  const random = () => {
    fetchRandomQuote();
  };

  return (
    <>
      <h1> Quote Generator</h1>
      <div className="box">
        <p className="quote">{quote.text}</p>
        <div className="box2">
          <p className="author">{quote.author.split(",")[0]}</p>
          <button
            className="button"
            onClick={() => {
              random();
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </>
  );
};
