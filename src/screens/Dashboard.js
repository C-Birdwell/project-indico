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
    const { characterCollection } = this.props
    return (
      <div className="content">
        {this.renderHead()}
        <CardBody array={characterCollection} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  characterCollection: state.character.characterCollection,
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}
export const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(dashboard)
