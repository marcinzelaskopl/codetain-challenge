import React, {Component} from 'react';
import '../App.scss';
import Lightsaber from '../img/comiclightsaber.jpg';
import Falcon from '../img/comicfalcon.jpg';


class JediItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberFalcon: 0,
            numberLightsaber: 0,
            borderColorFalcon: 'grey',
            borderColorLightsaber: 'grey',
            backgroundColorFalcon: '',
            backgroundColorLightsaber: '',
            priority: 'https://challenge.codetain.com/api/v1/charging_status',
        }
    }
    async componentDidMount() {
        try {
            setInterval(async () => {
                const api = await fetch(this.state.priority);
                const data = await api.json();

                this.setState({
                    numberFalcon: data.charging_status.falcon,
                    numberLightsaber: data.charging_status.lightsaber
                })
                if (this.state.numberFalcon > 0) {
                    this.setState({
                        borderColorFalcon: 'green',
                    })
                } else {
                    this.setState ({
                        borderColorFalcon: 'grey',
                    })
                }
                if (this.state.numberLightsaber > 0) {
                    this.setState({
                        borderColorLightsaber: 'green',
                    })
                } else {
                    this.setState({
                        borderColorLightsaber: 'grey',
                    })
                }
            }, 3000);
        } catch(e) {
            console.log(e);
        }
    }

    getChargeFalcon = () => {
        this.setState({
            backgroundColorFalcon: 'yellow',
            backgroundColorLightsaber: 'white',
            priority: 'https://challenge.codetain.com/api/v1/charging_status?priority=falcon'
        })
    };

    getChargeLightsaber = () => {
        this.setState({
            backgroundColorFalcon: 'white',
            backgroundColorLightsaber: 'yellow',
            priority: 'https://challenge.codetain.com/api/v1/charging_status?priority=lightsaber'
        })
    };


    render() {
        return (
            <div className={'grid-container holder'}>
                <div className={'row'}>
                    <h3 className={'total'}>TOTAL POWER  {this.state.numberFalcon + this.state.numberLightsaber} kW</h3>
                    <div className={'col-6  jediItems'}>
                        <img alt={'Falcon'} style={{borderColor: this.state.borderColorFalcon, backgroundColor: this.state.backgroundColorFalcon}} onClick={this.getChargeFalcon}
                             className={'falcon'} src={Falcon}/>
                        <p>{this.state.numberFalcon} kW</p>
                    </div>
                    <div className={'col-6  jediItems'}>
                        <img alt={'Lightsaber'} style={{borderColor: this.state.borderColorLightsaber, backgroundColor: this.state.backgroundColorLightsaber}} onClick={this.getChargeLightsaber}
                             className={'lightsaber'} src={Lightsaber}/>
                        <p>{this.state.numberLightsaber} kW</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default JediItems