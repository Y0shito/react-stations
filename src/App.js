// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <header>BBS</header>
      <p>犬の画像を表示するBBS</p>
      <img
              src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
              alt="dog"
            />
    </div>
  )
}
