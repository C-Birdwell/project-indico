import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = props => {
  const { text = 'Button', onClick = () => {}, icon = false, subtract = false } = props

  return (
    <button className={`button${subtract ? ' subtract' : ''}`} onClick={onClick}>
      <div className="row">
        {icon && (
          <div className="col-1">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <div className="col-9 center hide-mobile">
          <p>{text}</p>
        </div>
      </div>
    </button>
  )
}
