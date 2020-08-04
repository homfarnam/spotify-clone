import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js'
import Player from "./components/player/Player";
import {useDataLayerValue} from './states/DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  // const [token, setToken] = useState(null);
  const [{user,token},dispatch] = useDataLayerValue()


  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })


      spotify.setAccessToken(_token)

      spotify.getMe().then(user=>{

        dispatch({
          type:'SET_USER',
          user: user

        })

      })
    }

    console.log("I gave a token >>>", token);
  }, []);




  return (
    <div className="app">
      {token ? (
        <Player spotify={spotify} />
       ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
