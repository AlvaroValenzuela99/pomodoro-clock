import React, { Component } from 'react';

class BreakLength extends Component {
    constructor(props){
        super(props);
        this.setState({
            breakLength: 5
        })
    }
    render() {
        return (
            <div id="break-label">
                <h2>Break Length</h2>
                <div className="control">
                    <i id="break-decrement" class="fa-solid fa-arrow-down"></i>
                    <p id="break-length">5</p>
                    <i id="break-increment" class="fa-solid fa-arrow-up"></i>
                </div>
            </div>
        );
    }
}

export default BreakLength;
