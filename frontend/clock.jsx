import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const seconds = this.state.time.getSeconds();

    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
            <p><span>
               Time:
             </span>
            <span>
              {hours}:{minutes}:{seconds} PDT
             </span>
          </p>
            <p>Date: {this.state.time.toDateString()}</p>
          </div>
      </div>
    );
  }
}

export default Clock;
