// DO NOT DELETE
import * as React from 'react'

export const DogImage = (props) => {
  return (
    <img
      src={props.url}
      alt="dog"
      style={{ height: 300 }}
    />
  )
}