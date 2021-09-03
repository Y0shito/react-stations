// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = (props) => {
  const breeds = props.breeds;

  const listItems = breeds.map((value) =>
    <option key={value} value={value} text={value}>{value}</option>
  )

  return (
    <>
      <select value={props.value} onChange={props.change}>
        <option value="none">犬種を選択</option>
        {listItems}
      </select>
    </>
  )
}