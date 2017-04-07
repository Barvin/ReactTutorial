import React from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import helpers from '../helpers'

var Order = React.createClass({

  renderOrder : function(key){
    var fish = this.props.fishes[key]
    var count = this.props.order[key]
    var removeButton = <button onClick={this.props.removeFromOrder.bind(null, key)}>&times;</button>

    if(!fish) {
      return <li key={key}>Sorry, this fish is no longer available! {removeButton}</li>
    }

    return(
      <li key={key}>

        <CSSTransitionGroup
          component="span"
          transitionName="count"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          <span key={count}>{count}</span>
        </CSSTransitionGroup>
        
        lbs {fish.name} {removeButton}
        <span className="price">{helpers.formatPrice(count * fish.price)}</span>
      </li>
    )
  },

  render: function () {
    var orderIds = Object.keys(this.props.order)

    var total = orderIds.reduce((acc, key) => {
      var fish = this.props.fishes[key]
      var count = this.props.order[key]
      var isAvailable = fish && fish.status === 'available'

      if (isAvailable){
        return acc + (count * parseInt(fish.price) || 0)
      }

      return acc
    }, 0)

    return (
      <div className="order-wrap">
        <h2 className="order-title">Your Order</h2>

        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500} 
          >
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {helpers.formatPrice(total)}
          </li>
        </CSSTransitionGroup>

      </div>
    )
  }
})

Order.propTypes = {
  fishes : React.PropTypes.object.isRequired,
  order : React.PropTypes.object.isRequired,
  removeFromOrder : React.PropTypes.func.isRequired
}

export default Order