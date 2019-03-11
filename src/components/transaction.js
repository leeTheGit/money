import React from 'react';


const Transaction = (props) => {
    return (
        <li className="transaction__item">
            <ul className="u-flex_row u-flex1" data-type="">
                <li className="u-flex1 date">{props.dateString} </li>
                <li className="u-flex1 realdate">{props.realDateString}</li>
                <li className="u-flex1 account">{props.account}</li>
                <li className="u-flex5 description">{props.description} {props.tagstring}</li>
                <li className="u-flex1 credit">{props.credit}</li>
                <li className="u-flex1 debit">-{props.debit}</li>
                <li className="u-flex1 balance">{props.balance}</li>
                <li className="u-flex1 payed {props.balanceStyle}">{props.incBalance}</li>
                <li className="u-flex1 delete">x</li>
            </ul>
        </li>
    )
}


export default Transaction;