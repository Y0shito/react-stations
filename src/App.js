// DO NOT DELETE

// import * as React from 'react'

import React, {useState} from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const p = "犬の画像を表示するBBS";
  // const setDogUrl = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/shiba/shiba-1.jpg');

  return (
    <div>
      <header>BBS</header>
      <p>{p}</p>
      <img
        src={dogUrl}
        alt="dog"
      />
      <br/>
      <button onClick={() => {setDogUrl('https://images.dog.ceo/breeds/shiba/shiba-8.jpg')}}>更新</button>
    </div>
  );
}
