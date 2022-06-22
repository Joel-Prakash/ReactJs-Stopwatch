import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeInSeconds: 0}

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  updateTime = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onClickingStartButton = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickingStopButton = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onClickingResetButton = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const mins = this.renderMinutes()
    const secs = this.renderSeconds()

    const time = `${mins}:${secs}`

    return (
      <div className="main-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="timer-buttons-container">
            <div className="img-timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h1 className="timer-heading">Timer</h1>
            </div>
            <h1 className="timer">{time}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.onClickingStartButton}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.onClickingStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.onClickingResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
