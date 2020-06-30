import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { CardBody } from '../components'

class dashboard extends React.Component {
  renderHead() {
    return (
      <Helmet>
        <title>Indico Quest | Characters</title>
      </Helmet>
    )
  }

  render() {
    const { characters } = this.props
    return (
      <div className="content">
        {this.renderHead()}
        <CardBody array={characters} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.character.characters,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}
export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(dashboard)
