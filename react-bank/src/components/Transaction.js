import React, { Component } from 'react';

class Transaction extends Component {
constructor() {
super();
this.state = {}
}
  render(){
    const transaction = this.props.transaction
    return(
    <div className = "transaction">
    <span>{transaction.category}</span>
    <span>{transaction.vendor}</span>
    <span>{transaction.amount}</span>
    </div>);
 }
}
export default Transaction;