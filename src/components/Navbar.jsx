import React, { Component } from 'react';
import '../App.scss';
import {
    Link,
} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-12 navbar'}>
                        <p className={'logo'}>STAR WARS</p>
                        <Link to='/'><p>HOME</p></Link>
                        <Link to='/status'><p>STATUS</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar