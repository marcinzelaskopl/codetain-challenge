import React, { Component } from 'react';
import '../App.scss';
import Articles from "./Articles";

class Header extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 header'}>
                        <h1>POWER SOURCE</h1>
                    </div>
                </div>
                <Articles/>
            </div>
        )
    }
}

export default Header