import React, { Component } from 'react';

class BreakLength extends Component {
    constructor(props){
        super(props);
        this.state = {
            breakLength: 5
        }

        this.decrementBreakLength = this.decrementBreakLength.bind(this);
        this.incrementBreakLength = this.incrementBreakLength.bind(this);
    }

    decrementBreakLength(){
        if(this.state.breakLength > 0){
            this.setState(
                { breakLength: this.state.breakLength - 1 },
                () => this.props.onChange(this.state.breakLength)    
            )
            
        }
    }
    incrementBreakLength(){
        if(this.state.breakLength < 60){
            this.setState(
               { breakLength: this.state.breakLength + 1 },
               () => this.props.onChange(this.state.breakLength)
            )
        }
    }

    render() {
        return (
            <div id="break-label">
                <h2>Break Length</h2>
                <div className="control">
                    <i id="break-decrement" class="fa-solid fa-arrow-down" onClick={this.decrementBreakLength}></i>
                    <p id="break-length">{this.state.breakLength}</p>
                    <i id="break-increment" class="fa-solid fa-arrow-up" onClick={this.incrementBreakLength}></i>
                </div>
            </div>
        );
    }
}

export default BreakLength;
