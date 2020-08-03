import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token)
    }

    console.log("I gave a token >>>", token);
  }, []);

  return (
    <div className="app">
      {token ? (
        // <Player />
        <h1>I am logged in</h1>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
