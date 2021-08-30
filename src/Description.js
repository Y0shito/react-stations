// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = (props) => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/shiba/shiba-1.jpg');

  const setImg = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogUrl(data.message));
  }

  return (
    <>
      <p className="p">{props.text}</p>
      <DogImage className="img" url={dogUrl} />
      <button className="button" onClick={() => { setImg(); }}>更新</button>
    </>
  )
}