import React, { Component } from 'react';
import { connect } from 'react-redux';
import './assets/styles/concat.min.css';
import Transactions from './components/transactions';
import DatabaseLoad from './components/database';
import { CoolSlider }   from './components/slider/slider.js';

class App extends Component {
    
    state = {
        db : null,
        dateEnd : null,
        dbloaded : false,
        dateStart : null,
    }


    render() {
        console.log('rendering app');
        console.log(this.props.db, this.props.dbloaded);
        return (

            <div id="container" className="container u-flex_col u-flex1">
                <CoolSlider />
                { 
                    (this.props.db !== null)
                        ? <Transactions database={this.props.db} />
                        : null
                }
                

                <DatabaseLoad />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        dbloaded : state.dbloaded,
        db: state.db,
        dateStart : state.dateStart,
        dateEnd : state.dateEnd,
    };
};


export default connect(mapStateToProps)(App);
