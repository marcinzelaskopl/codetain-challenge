import React, { Component } from 'react';
import '../App.scss';

class Footer extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 footer'}>
                        <p>All rights reserved... or not.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer