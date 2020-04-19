import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import '../styles/operations.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme(
    {
        palette: {
          primary: {
            main: '#00796b',
          },
          secondary: {
            main: '#d32f2f',
          },
        },
      }
);

class Operations extends Component {
constructor() {
super();
this.transactionObj = {amount:"",vendor:"",category:""}
}

changeAmount = (event)=>{
    this.transactionObj.amount = event.target.value}

changeVendor = (event)=>{
    this.transactionObj.vendor = event.target.value}

changeCategory = (event)=>{
    this.transactionObj.category = event.target.value}

addTransaction = (event) => {
    this.transactionObj.amount = Math.abs(this.transactionObj.amount)
    if(event.target.id === "deposit-btn"){
    this.props.addTransaction(this.transactionObj)
    } else {
        this.transactionObj.amount = this.transactionObj.amount*(-1)
        this.props.addTransaction(this.transactionObj)
    }
}

  render(){
    return (
    <MuiThemeProvider theme={theme}>
    <div>
    <Input placeholder = "Amount" id="amount" onChange = {this.changeAmount}></Input>
    <Input placeholder = "Vendor" id="vendor" onChange = {this.changeVendor}></Input>
    <Input placeholder = "Category" id="category" onChange = {this.changeCategory}></Input>
    <Button variant="contained" color = "primary" id="deposit-btn" onClick = {this.addTransaction}>Deposit</Button>
    <Button variant="contained" color = "secondary" id="withdraw-btn" onClick = {this.addTransaction}>Withdraw</Button>  
    </div>
    </MuiThemeProvider>
    )
 }
}

export default Operations;