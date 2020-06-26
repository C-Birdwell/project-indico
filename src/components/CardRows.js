import React from 'react'

import { dataCharacterCategory } from '../data'
import { CardBody } from '../components'
import { Button } from './subComponents'

const character = (val, id) => {
  return (
    <div key={id} className="card-container">
      <div className="card-character-image"></div>
      <div className="card-character-body">
        <CardBody data={val} />
      </div>
    </div>
  )
}

export const CardRows = ({ array }) => {
  const mapArray = array.map(val => character(val, val.id))

  return <div className="grid-3 grid-container">{mapArray}</div>
}
