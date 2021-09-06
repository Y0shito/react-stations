// DO NOT DELETE
import * as React from 'react'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

/**
 * 
 * @type {React.FC}
 */

export const App = () => {

  const Border = ({ color }) => (
    <hr
      style={{
        backgroundColor: color,
        height: 2,
      }}
    />
  );

  return (
    <div>
      <Header title="DOG APP" />
      <div className="main">
        <Description text="犬の画像を表示するアプリです" />
        <Border color="gray" />
        <DogListContainer />
      </div>
    </div>
  );
}
