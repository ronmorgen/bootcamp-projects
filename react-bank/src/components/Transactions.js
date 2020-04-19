import React, { Component } from 'react';
import Transaction from './Transaction';


class Transactions extends Component {
    
    render(){
        return(
            this.props.transactions.map(t=>
                <Transaction transaction = {t} />)
        );
    }
}
export default Transactions;