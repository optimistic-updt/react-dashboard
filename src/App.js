import React from 'react';
import './grid.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="main-header section group">
        <img src="../logo192.png" alt="logo" className="logo"/>
        
        <nav className="nav">
          <a href="#">Overview</a>
          <a href="#">Calendar</a>
          <a href="#">Finance</a>
          <a href="#">Fitness</a>
        </nav>
        <button className="button button-user">User</button>
      </header>

      <main>
        <section className="section section--feeling span_2_of_4">
          <input type="text" placeholder="How are you feeling today?"/>
          <output>This is a test script</output>
          <button className="button button-analyse">Analyze</button>
        </section>

        <section className="section section--calendar"></section>
        <section className="section--weather"></section>
        <section className="section--news"></section>
        <section className="section--sleeptracker"></section>
        <section className="section--todo"></section>
        <section></section>
      </main>

      <footer className="main-footer">
        <p>&copy; Kevin Garcia Fernandez</p>
        <i>GitHub</i>
        <i>GitHub</i>
        <i>GitHub</i>
        <i>GitHub</i>
      </footer>

    </div>
  );
}

export default App;
