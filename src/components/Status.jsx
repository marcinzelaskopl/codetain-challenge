import React, { Component } from 'react';
import '../App.scss';
import JediItems from "./JediItems";

class Status extends Component {
    render(){
        return (
            <div className={'grid-container status-holder'}>
                <div className={'row'}>
                    <div className={'col-12 status'}>
                        <JediItems/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Status