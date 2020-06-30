import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { faSkullCrossbones, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import { _characterCreate, _characterHealthSet, _windowSize } from '../actions'
import { Button } from './subComponents'
class header extends React.Component {
  constructor(...props) {
    super(...props)
    this.resize = this.resize.bind(this)
  }

  resize() {
    const { _windowSize } = this.props
    _windowSize(window.innerWidth)
  }

  componentDidMount() {
    const { _windowSize } = this.props
    _windowSize(window.innerWidth)
    window.addEventListener('resize', this.resize)
  }

  render() {
    const { _characterCreate, _characterHealthSet } = this.props

    return (
      <header className="header">
        <div className="header-content">
          <div className="row">
            <div className="row col-2">
              <div className="col-1 center">
                <Button text="Add Character" onClick={() => _characterCreate()} icon={faUserPlus} />
              </div>
              <div className="col-1 center">
                <Button
                  text="Attack All"
                  onClick={() => _characterHealthSet()}
                  icon={faSkullCrossbones}
                  subtract
                />
              </div>
            </div>
            <div className="col-3 hide-mobile" />
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  charactersArray: state.character.charactersArray,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ _characterCreate, _characterHealthSet, _windowSize }, dispatch)
}
export const Header = connect(mapStateToProps, mapDispatchToProps)(header)
