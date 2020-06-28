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
import { Button } from './subComponents'

class cardBody extends React.Component {
  renderButtonRow(statTitle, statAmt, funcSub, funcAdd, id) {
    const { characterCollection } = this.props

    return (
      <div className="row">
        <div className="col-2 center">
          <p key={`${id}-${statTitle}-${statAmt}`}>
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

    return (
      <div className="card-container" key={val.id}>
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
