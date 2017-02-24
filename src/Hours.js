import React, { Component } from 'react';
import 'whatwg-fetch';
import parseMilitary from './utility/date-utils';
import './Hours.css';

class Hours extends Component {
    componentDidMount() {
        fetch('https://s3.us-east-2.amazonaws.com/restaurant.ericbutler.info/hours.json')
            .then(resp => resp.json())
            .then(json => {
                console.log(`json: ${JSON.stringify(json)}`)
                this.setState(json)
            });
    }

    render() {
        if (!this.state) {
            return (<div className="loader" />);
        } else {
            let entries = [];

            for(let day in this.state) {
                entries.push(<li key={day}>{day}: {parseMilitary(this.state[day].open)} - {parseMilitary(this.state[day].close)}</li>);
            }
            return (
                <ul>
                    { entries }
                </ul>
            );
        }
    }
}

export default Hours;
