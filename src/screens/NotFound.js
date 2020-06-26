import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export class NotFound extends React.Component {
  head() {
    return (
      <Helmet>
        <title>Indico Quest | 404 Page Not Found</title>
      </Helmet>
    )
  }

  render() {
    return (
      <div className="content">
        {this.head()}
        <div className="not-found-page">
          <h2>404 Page not Found</h2>
          <h2>You've become lost adventurer...</h2>
          <Link className="button button-link" to="/">
            Go back to your destiny
          </Link>
        </div>
      </div>
    )
  }
}
