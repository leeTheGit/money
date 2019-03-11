import React, {Component} from 'react';
import Transaction from './transaction';
import {connect } from 'react-redux';
import moment from 'moment';

class Transactions extends Component {


    state = {
        transactions : [],
        dateEnd : moment().format("YYYY-MM-DD"),
        dateStart : moment().subtract(1, 'month').format("YYYY-MM-DD"),
        selected: null,
    }

    componentDidMount() {
        console.log('mounting transactions');
        console.log(this.props);
        const sql = `SELECT * FROM transactions
                     WHERE date >= '${this.state.dateStart}' 
                     AND date <= '${this.state.dateEnd}'`;

        const transactions = this.props.database.execute(sql);
        this.setState({transactions});
    }


    
    render() {
        console.log('rendering transactions');
        console.log(this.props);
        console.log(this.state);
        const transactions = this.state.transactions.map(transaction => {
            return (
                <Transaction    key             = {transaction.id}
                                realDateString  = {transaction.realDateString}
                                description     = {transaction.description}
                                dateString      = {transaction.date}
                                incBalance      = {transaction.incBalance}
                                tagstring       = {transaction.tagstring}
                                balance         = {transaction.balance}
                                account         = {transaction.account}
                                credit          = {transaction.credit}
                                debit           = {transaction.debit}
                />

            )
        })
        return (
            <div className="transactions">
                {transactions}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        transactions : state.transactions,
        dateStart : state.dateStart,
        dateEnd : state.dateEnd,
    };
};

export default connect(mapStateToProps)(Transactions);
