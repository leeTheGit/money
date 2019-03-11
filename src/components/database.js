import React, {Component} from 'react';

import {connect } from 'react-redux';


class DatabaseLoad extends Component {


    state = {
        transactions : [],
        dbloaded : false
    }

    loadDb = (e) => {
        var self = this;
        console.log(e.target.files);
        console.log(this.props);
        var f = e.target.files[0];
        var r = new FileReader();
        r.readAsArrayBuffer(f);
        r.onload = function() {
            var buffer = new Uint8Array(r.result);
            if (!window.SQL) return; 
            var db = new window.SQL.Database(buffer);
            db.execute = function(sql, params) {
                var data = this.exec(sql);
                return this.parseSQL(data);
            };
            db.parseSQL = function(ret) {
                var result = [];
                for(var i=0; i<ret[0].values.length; i++) {
                    var row = ret[0].values[i];
                    var row_res = {};
                    for(var j=0; j<row.length; j++) {
                        row_res[ret[0].columns[j]] = row[j];
                    }
                    result.push(row_res);
                }
                return result;
            };
            db.save = function() {
                var a = document.createElement("a");
                document.body.appendChild(a);
                var binaryArray = this.export();
                var bb = new Blob([binaryArray], {type: 'application/octet-stream'}),
                    url = window.URL.createObjectURL(bb);
                a.href = url;
                a.download = 'db.sqlite';
                a.click();
                window.URL.revokeObjectURL(url);
                a.remove();
            }

            self.props.onDbLoad(db);
            // var transactions = db.execute("SELECT * FROM transactions");
            // console.log(transactions);


        }

    }

    render() {

        return (
            <div id="load_db" className="u-flex_col u-flex-shrink0">
                <label className="button">Load an SQLite database file: <input onChange={(e) => this.loadDb(e)} type='file' id='dbfile' /></label>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        transactions : state.transactions,
        dbloaded : state.dbloaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDbLoad : (db) => {
            dispatch({type: 'DATABASE_LOADED', value : db});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseLoad);

