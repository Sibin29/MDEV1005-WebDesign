import React, { useState, useEffect } from "react";
import axios from "axios";

const StocksWidget = () => {
  const [topStocks, setTopStocks] = useState([]);
  const API_KEY = "PXA1WO7XXH7N9ZHX";
  useEffect(() => {
    const fetchTopStocks = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
        );

        // Getting top 5 gainers from the API response
        if (response.data && response.data.top_gainers) {
          setTopStocks(response.data.top_gainers.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchTopStocks();
  }, []);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", margin: "10px 0" }}>
      <h2>Stocks: Top 5 Gainers of the day</h2>
      {topStocks.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {topStocks.map((stock, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>{stock.ticker}</strong>: ${stock.price} (+{stock.change_percentage})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StocksWidget;