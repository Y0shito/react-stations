// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  return (
    <div>
      <Header title="DOG APP" />
      <div>
        <Description text="犬の画像を表示するアプリです" />
      </div>
    </div>
  );
}
