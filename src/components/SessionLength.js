import React, { Component } from 'react';

class SessionLength extends Component {
    constructor(props){
        super(props)
        this.setState({
            sessionLength: 25
        })
    }
    render() {
        return (
            <div id="session-label">
                <h2>Session Length</h2>
                <div className="control">
                    <i id="session-decrement" class="fa-solid fa-arrow-down"></i>
                    <p id="session-length">25</p>
                    <i id="session-increment" class="fa-solid fa-arrow-up"></i>
                </div>
            </div>
        );
    }
}

export default SessionLength;
