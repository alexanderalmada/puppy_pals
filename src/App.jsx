import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("featPup id: ", featPupId);
  console.log("puppy id: ", puppyList);
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <div className="App">
            {puppies.map((puppy) => {
              return (
                <p
                  onClick={() => {
                    setFeatPupId(puppy.id);
                  }}
                >
                  {puppy.name}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
  {
    featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    );
  }
}

export default App;
