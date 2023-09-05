import React, { Component } from 'react';

class SessionLength extends Component {
    constructor(props){
        super(props)
        this.state = {
            sessionLength: 25
        }

        this.decrementSessionLength = this.decrementSessionLength.bind(this);
        this.incrementSessionLength = this.incrementSessionLength.bind(this);
    }

    decrementSessionLength(){
        if(this.state.sessionLength > 0){
            this.setState(
                { sessionLength: this.state.sessionLength - 1 },
                () => this.props.onChange(this.state.sessionLength)    
            )
        }
    }
    incrementSessionLength(){
        if(this.state.sessionLength < 60){
            this.setState(
                { sessionLength: this.state.sessionLength + 1 },
                () => this.props.onChange(this.state.sessionLength)    
            )
        }
    }

    render() {
        return (
            <div id="session-label">
                <h2>Session Length</h2>
                <div className="control">
                    <i id="session-decrement" class="fa-solid fa-arrow-down" onClick={this.decrementSessionLength}></i>
                    <p id="session-length">{this.state.sessionLength}</p>
                    <i id="session-increment" class="fa-solid fa-arrow-up" onClick={this.incrementSessionLength}></i>
                </div>
            </div>
        );
    }
}

export default SessionLength;
