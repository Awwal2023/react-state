import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Omodojo Anthony Damilare',
      bio: `🚀 Full Stack Developer with a passion for crafting robust web applications. 
      Proficient in frontend technologies such as React.js and skilled in backend development using Node.js and Express.
       Experienced in database management with MongoDB and SQL.
      Committed to delivering high-quality, user-centric solutions through collaborative and agile development.
       Ready to tackle new challenges and contribute to innovative projects.
      `,
      imgSrc: 'DP.jpg',
      profession: 'Full Stack Developer',
    },
    shows: true,
    timeInterval: 0,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className={`card ${shows ? 'show' : ''}`}>
            <button
          className={`toggle-button ${shows ? 'active' : ''}`}
          onClick={this.toggleShow}
        >
          <div className="ball"></div>
          Toggle Profile
        </button>
        {shows && (
           <div className="profile">
            <h2 className='name'>{person.fullName}</h2>
            <p className='bio'>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time Interval: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
