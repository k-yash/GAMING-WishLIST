import React, { useState } from "react";
import "./styles.css";

const gameDB = {
  "Action 🔥": [
    { name: "Grand Theft Auto V", rating: "4/5" },
    { name: "Watch Dogs", rating: "3.5/5" },
    { name: "HITMAN 2", rating: "4/5" }
  ],

  "FPS 🔫": [
    {
      name: "Counter Strike",
      rating: "5/5"
    },
    {
      name: "PlayerUnknown's Battlegrounds ",
      rating: "4.5/5"
    },
    { name: "APEX Legends", rating: "3.5/5" }
  ],
  "Sports ⚽": [
    {
      name: "FIFA 21",
      rating: "3.5/5"
    },
    {
      name: "Pro Evolution Soccer",
      rating: "5/5"
    },
    { name: "NBA 2K20", rating: "4/5" }
  ]
};

var gamesWeKnow = Object.keys(gameDB);
// console.log(gamesWeKnow)

export default function App() {
  const [viewGame, setGame] = useState("Sports ⚽");
  function setGameHandler(game) {
    setGame(game);
    // console.log(setGame)
  }
  return (
    <div className="App">
      <h1>GAMING WishLIST</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite games. Select a genre to get started
      </p>
      <div>
        {gamesWeKnow.map((game) => {
          return (
            <button
              onClick={() => setGameHandler(game)}
              style={{
                padding: ".5rem .9rem",
                margin: ".5rem .7rem",
                fontSize: "1.2em",
                borderRadius: "10px",
                cursor: "pointer",
                color: "white"
              }}
              key={game}
            >
              {game}
            </button>
          );
        })}
        <hr />
        <div>
          <ul style={{ margin: "0", padding: "0" }}>
            {gameDB[viewGame].map((gamedis) => {
              return (
                <li
                  key={gamedis.name}
                  style={{
                    border: "1px solid #bd1a8d",
                    borderRadius: "5px",
                    padding: "1.2rem 1rem",
                    margin: "1rem",
                    listStyle: "none",
                    textAlign: "left",
                    color: "white"
                  }}
                >
                  <div style={{ fontSize: "1.3rem" }}>{gamedis.name}</div>
                  <div style={{ fontSize: ".8rem" }}>{gamedis.rating}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
