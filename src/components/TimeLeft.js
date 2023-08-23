import React, { Component } from 'react';

class TimeLeft extends Component {
    render() {
        return (
            <div id="timer-label">
                <div className="session-timer">
                    <h2>Session</h2>
                    <p>25:00</p>
                </div>
                <div className="session-play">
                    <i class="fa-solid fa-play"></i>
                    <i class="fa-solid fa-pause"></i>
                    <i class="fa-solid fa-arrows-rotate"></i>
                </div>
            </div>
        );
    }
}

export default TimeLeft;
