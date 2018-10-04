import React, { Component } from 'react';
import './App.css';
// Components
import Navbar from './components/Navbar';
import CourseList from './components/CourseList'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CourseList />
      </div>
    );
  }
}

export default App;
