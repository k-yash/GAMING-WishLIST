import React, { useState } from "react";
import "./styles.css";

const gameDB = {
  "Action 🔥": [
    {
      name: "Grand Theft Auto V",
      rating: "4.8/5",
      summary:
        "Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their efforts to commit heists while under pressure from a corrupt ...",
      link: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_V"
    },
    {
      name: "Watch Dogs",
      rating: "4.2/5",
      summary:
        "Watch Dogs is a series of action-adventure games developed and published by Ubisoft. It spans three games: Watch Dogs, Watch Dogs 2 and Watch Dogs: Legion. Gameplay focuses on an open world where the player can complete missions to progress an overall story, as well as engage in various side activities.",
      link: "https://en.wikipedia.org/wiki/Watch_Dogs"
    }
  ],
  "FPS 🔫": [
    {
      name: "Counter Strike",
      rating: "5/5",
      summary:
        "Counter-Strike is a series of multiplayer first-person shooter video games in which teams of terrorists battle to perpetrate an act of terror while counter-terrorists try to prevent it. The series began on Windows in 1999 with the release of the first game, Counter-Strike.",
      link: "https://en.wikipedia.org/wiki/Counter-Strike"
    },
    {
      name: "PlayerUnknown's Battlegrounds ",
      rating: "4.5/5",
      summary:
        "Battlegrounds is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people. The last person or team alive wins the match.",
      link: "https://en.wikipedia.org/wiki/PlayerUnknown's_Battlegrounds"
    }
  ],

  "Sports ⚽": [
    {
      name: "FIFA 22",
      rating: "5/5",
      summary:
        "The 2022 FIFA World Cup is scheduled to be the 22nd edition of the FIFA World Cup, the quadrennial international men's association football championship contested by the national teams of the member associations of FIFA. It is scheduled to take place in Qatar from 21 November to 18 December 2022.",
      link: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup"
    },
    {
      name: "Pro Evolution Soccer",
      rating: "4.1/5",
      summary:
        "eFootball PES 2020 is a football simulation video game developed by PES Productions and published by Konami for Microsoft Windows, PlayStation 4, Xbox One, Android and IOS.",
      link: "https://en.wikipedia.org/wiki/Pro_Evolution_Soccer"
    }
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
                  <div style={{ fontSize: ".8rem", padding: ".4rem 0rem" }}>
                    Rating: {gamedis.rating}
                  </div>
                  <div style={{ fontSize: "1rem" }}>
                    {gamedis.summary}
                    <a href={gamedis.link}> Read more</a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
