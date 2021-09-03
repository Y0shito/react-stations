// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = (props) => {
  const values = props.values;

  return (
    <select name="breeds">
      {values.map((value) =>
        <option key={value} value={value}>{value}</option>
      )}
    </select>
  )
}