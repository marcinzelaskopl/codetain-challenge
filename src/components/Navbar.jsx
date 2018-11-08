import React, { Component } from 'react';
import '../App.scss';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 navbar'}>
                        <p className={'logo'}>LOGO</p>
                        <p>HOME</p>
                        <p>STATUS</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar