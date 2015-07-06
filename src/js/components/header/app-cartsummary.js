var React = require('react');
var Link = require('react-router-component').Link;

var CartSummary = React.createClass({
  render: function(){
    return (
      <div>
        <Link href="/cart" className="btn btn-success">
          Cart Items: QTY / Cost
        </Link>
      </div>
    )
  }
});

module.exports = CartSummary;
