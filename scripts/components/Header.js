import React from 'react'

var Header = React.createClass({
  render: function () {
    return (
      <header className="top">
        <h1>
          <span className="catch">Catch</span>

          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          <span className="day">day</span>
        </h1>
        <h3>{this.props.tagline}</h3>
      </header>
    )
  }
})

Header.propTypes = {
  tagline : React.PropTypes.string.isRequired
}

export default Header