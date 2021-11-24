import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MyMap from "./Components/MyMap";
import CountryInfo from "./Components/CountryInfo";

function App() {
  const [userIP, setUserIP] = useState();
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    const fetchIP = async () => {
      await axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
        )
        .then((response) => {
          setUserIP(response.data.ip);
          setUserLocation(response.data.location);
        })
        .catch((error) => console.log(error));
    };
    fetchIP();
  }, []);
  return (
    <div className="container-fluid App my-3">
      <header>
        <h1>Welcome to WhatsmyIP</h1>
      </header>
      <main>
        {userLocation ? (
          <>
            <h2>This is your IP-Address: {userIP}</h2>
            <h3>Your location is: {userLocation.city}</h3>
            <MyMap userLocation={userLocation} />
            <CountryInfo userCountry={userLocation.country} />
          </>
        ) : (
          "Loading..."
        )}
      </main>
    </div>
  );
}

export default App;
