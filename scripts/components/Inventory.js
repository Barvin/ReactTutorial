import React from 'react'

import AddFishForm from './AddFishForm'

var Inventory = React.createClass({
  //valueLink is from Catalyst library
  renderInventory : function(key){
    var linkState = this.props.linkState
    //var availability = valueLink={linkState('fishes.' + key + '.price')}
    return(
      <div className="fish-edit" key={key}>
        <input type="text" valueLink={linkState('fishes.' + key + '.name')} placeholder="Fish Name" />
        <input type="text" valueLink={linkState('fishes.' + key + '.price')} placeholder="Fish Price" />
        <select ref="status" valueLink={linkState('fishes.' + key + '.status')}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea type="text" valueLink={linkState('fishes.' + key + '.desc')} placeholder="Desc" />
        <input type="text" valueLink={linkState('fishes.' + key + '.image')} placeholder="URL to Image" />
        <button type="submit" onClick={this.props.removeFish.bind(null, key)}>Remove Fish</button>
      </div>
    )
  },
  render: function () {
    return (
      <div>
        <h1>Inventory</h1>

        <p>New Fish</p>
        <AddFishForm {...this.props} />
        <p>. . .</p>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
})

Inventory.propTypes = {
    addFish : React.PropTypes.func.isRequired,
    loadSamples : React.PropTypes.func.isRequired,
    fishes : React.PropTypes.object.isRequired,
    linkState : React.PropTypes.func.isRequired,
    removeFish : React.PropTypes.func.isRequired
}

export default Inventory