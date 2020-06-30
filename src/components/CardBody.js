import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'

import {
  _characterDelete,
  _characterHealthAdd,
  _characterHealthSub,
  _characterAttackAdd,
  _characterAttackSub,
  _characterDefenseAdd,
  _characterDefenseSub,
} from '../actions'
import { gridFromArray } from '../utils'
import { Button } from './subComponents'

class cardBody extends React.Component {
  renderButtonRow(statTitle, statAmt, funcSub, funcAdd, id) {
    const { characterCollection } = this.props

    return (
      <div className="row" key={`${id}-${statTitle}`}>
        <div className="col-2 center">
          <p>
            {statTitle} {statAmt}
          </p>
        </div>
        <div className="col-1 row">
          <div className="col-1">
            <Button text="-" onClick={() => funcSub(id)} subtract />
          </div>
          <div className="col-1">
            <Button text="+" onClick={() => funcAdd(id)} />
          </div>
        </div>
      </div>
    )
  }

  renderCard(val) {
    const {
      _characterDelete,
      _characterHealthSub,
      _characterHealthAdd,
      _characterAttackAdd,
      _characterAttackSub,
      _characterDefenseAdd,
      _characterDefenseSub,
      characterCollection,
    } = this.props

    const findCharacter = characterCollection.filter(v => v.id === val.id)

    return (
      <div className="card-container" key={JSON.stringify(findCharacter)}>
        <div className="col-1">
          <div className="card-character-image">
            <img src={`../images/${val.category}.jpg`} alt={`${val.category}`} />
            <div className="remove-character-icon" onClick={() => _characterDelete(val.id)}>
              <FontAwesomeIcon icon={faSkull} />
            </div>
          </div>
        </div>
        <div className="col-4 align-end">
          <div className="card-character-body">
            {this.renderButtonRow(
              'Health',
              val.health,
              _characterHealthSub,
              _characterHealthAdd,
              val.id,
            )}
            {this.renderButtonRow(
              'Attack',
              val.attack,
              _characterAttackSub,
              _characterAttackAdd,
              val.id,
            )}
            {this.renderButtonRow(
              'Defense',
              val.defense,
              _characterDefenseSub,
              _characterDefenseAdd,
              val.id,
            )}
          </div>
        </div>
      </div>
    )
  }

  renderRows() {
    const { characterCollection, windowMode } = this.props

    const numOfCol = val => {
      switch (val) {
        case 'pad':
          return 2

        case 'mobile':
          return 1

        default:
          return 3
      }
    }

    const gridArray = gridFromArray(characterCollection, numOfCol(windowMode))

    return gridArray.map((val, i) => (
      <div className="row push-down" key={`key-array-${i}`}>
        {val.map((v, vi) => (
          <div key={`${i}-card-${vi}`} className="col-1">
            {this.renderCard(v)}
          </div>
        ))}
        {val.length < 2 && <div className="col-1 hide-mobile" />}
        {val.length < 3 && <div className="col-1 hide-pad" />}
      </div>
    ))
  }

  render() {
    return <div className="updateMe">{this.renderRows()}</div>
  }
}

const mapStateToProps = state => ({
  characterCollection: state.character.characterCollection,
  windowMode: state.visual.windowMode,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      _characterDelete,
      _characterHealthAdd,
      _characterHealthSub,
      _characterAttackAdd,
      _characterAttackSub,
      _characterDefenseAdd,
      _characterDefenseSub,
    },
    dispatch,
  )
}
export const CardBody = connect(mapStateToProps, mapDispatchToProps)(cardBody)
