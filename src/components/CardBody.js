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
            <Button
              text="-"
              onClick={() => {
                funcSub(id), this.forceUpdate()
              }}
              subtract
            />
          </div>
          <div className="col-1">
            <Button
              text="+"
              onClick={() => {
                funcAdd(id), this.forceUpdate()
              }}
            />
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
    const { characterCollection } = this.props

    const mapCharacters = () => characterCollection.map(val => this.renderCard(val))
    const mapGrid = () =>
      gridFromArray(characterCollection, 3).map((val, i) => (
        <div key={i} className="row card-grid-row">
          {val.map(v => this.renderCard(v))}
        </div>
      ))

    return <div className="grid-container grid-3 gap">{mapCharacters()}</div>
  }

  render() {
    return <div>{this.renderRows()}</div>
  }
}

const mapStateToProps = state => ({
  characterCollection: state.character.characterCollection,
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
export const CardBody = connect(
  mapStateToProps,
  mapDispatchToProps,
)(cardBody)
