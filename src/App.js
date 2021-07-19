// DO NOT DELETE

// import * as React from 'react'

import React, { useState } from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const p = "犬の画像を表示するBBS";

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/shiba/shiba-1.jpg');

  const setImg = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogUrl(data.message));
    return
  }

  return (
    <div>
      <header>BBS</header>
      <p>{p}</p>
      <img
        src={dogUrl}
        alt="dog"
      />
      <br />
      <button onClick={() => {setImg()}}>更新</button>
    </div>
  );
}
