import './App.css';
import React, { Component } from 'react';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import axios from 'axios';


class App extends Component {
  constructor() {
  super();
  this.state = {
    transactions:[],
    totalBalance:""
  }
}
componentDidMount() {
  axios.get("http://localhost:5000/transactions")
    .then(res => {
      const transactions = res.data;
      const totalBalance = transactions.map(obj => obj.amount).reduce((a,b)=>a+b,0)
      console.log(transactions.map(obj => obj.amount))
      this.setState({ transactions, totalBalance});
    })
}

addTransaction = (newObject) => {
  axios.post("http://localhost:5000/transaction", newObject)
  .then(res => {
    this.componentDidMount()
  })
}
  render(){
    console.log(this.state.transactions)
    return(
      <div>
        <h1>Total balance: {this.state.totalBalance}</h1>
        <Transactions transactions = {this.state.transactions} />
        <Operations addTransaction = {this.addTransaction}/>
      </div>
    )
}
}

export default App;


