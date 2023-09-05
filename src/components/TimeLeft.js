import React, { Component } from 'react';

class TimeLeft extends Component {

    constructor(props){
        super(props);
        this.state = {
            timeRemaining: props.sessionLength * 60, //En segundos
            isRunning: false,
            isBreak: false
        }
        this.timer = null; //Almacenar el temporizador
        this.audioRef = React.createRef(); //Referencia al elemento de audio
    }

    //Transformar duracion de sesion a minutos:segundos
    formatTime = (seconds) => {
        const formattedMinutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${formattedMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    //para actualizar el timeRemaining del componente
    componentDidUpdate(prevProps) {
        if (this.props.sessionLength !== prevProps.sessionLength) {
            this.setState({
                timeRemaining: this.props.sessionLength * 60,
            });
        }
    }


   // Manejador de clic para el botón "play/pause"
   handlePlayPauseClick = () => {
    if (this.state.isRunning) {
        // Detener el temporizador si está en funcionamiento
        clearInterval(this.timer);
    } else {
        // Iniciar el temporizador si no está en funcionamiento
        this.timer = setInterval(this.updateTime, 1000);
    }

    // Cambiar el estado de isRunning
    this.setState((prevState) => ({
        isRunning: !prevState.isRunning,
    }));
};

    // Actualizar el tiempo restante en cada intervalo
    updateTime = () => {
        if (this.state.timeRemaining > 0) {
            this.setState((prevState) => ({
                timeRemaining: prevState.timeRemaining - 1,
            }));
        } else {
            // Cronómetro de sesión o descanso llega a cero
            clearInterval(this.timer);

            if (this.state.isBreak) {
                // Si es un descanso, cambiar a sesión
                this.setState({
                    timeRemaining: this.props.sessionLength * 60,
                    isBreak: false,
                    isRunning: true,
                });
            } else {
                // Si es una sesión, cambiar a descanso
                this.setState({
                    timeRemaining: this.props.breakLength * 60,
                    isBreak: true,
                    isRunning: true,
                });
            }

            //Reproducir el sonido de beep
            this.audioRef.current.play();

            // Iniciar el nuevo temporizador
            this.timer = setInterval(this.updateTime, 1000);
        }
    };

    handleResetClick = () => {
        clearInterval(this.timer);

        //Resetear los valores de break y session length
        this.props.resetDefaultValues();

        //Reiniciar el estado
        this.setState({
            timeRemaining: this.props.sessionLength * 60,
            isRunning: false,
            isBreak: false
        });

        //Detener el sonido de beep si esta reproduciendose
        this.audioRef.current.pause();
        this.audioRef.current.currentTime = 0;
    }

    render() {

        return (
            <div id="timer-label">
                <div className="session-timer">
                    <h2>{this.state.isBreak ? 'Break' : 'Session'}</h2>
                    <p id="time-left">{this.formatTime(this.state.timeRemaining)}</p>
                </div>
                <div className="session-play">
                    <i className={`fa-solid ${
                            this.state.isRunning ? 'fa-pause' : 'fa-play'
                        }`} id="start_stop" onClick={this.handlePlayPauseClick}></i>
                    <i className="fa-solid fa-arrows-rotate" id="reset" onClick={this.handleResetClick}></i>
                </div>

                {/* Elemento de audio */}
                <audio ref={this.audioRef} src="../audio/clock-alarm.mp3" preload="auto"></audio>
                
            </div>
        );
    }
}

export default TimeLeft;
