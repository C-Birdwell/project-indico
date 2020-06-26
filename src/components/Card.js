import React from 'react'

export class Card extends React.Component {
  render() {
    return <div key={this.props.i}>{this.props.children}</div>
  }
}
