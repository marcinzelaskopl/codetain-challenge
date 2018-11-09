import React, { Component } from 'react';
import '../App.scss';
import JediItems from "./JediItems";

class Status extends Component {
    constructor(props){
        super(props);

        this.state = {
            totalPower: 0,
        }
    }
    render(){
        return (
            <div className={'grid-container status-holder'}>
                <div className={'row'}>
                    <div className={'col-12 status'}>
                    </div>
                </div>
                <JediItems/>
            </div>
        )
    }
}

export default Status