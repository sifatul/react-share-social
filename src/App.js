import logo from './logo.svg';
import './App.css';

import SocialShare from './components/index'
import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <SocialShare
            socialTypes={['facebook','twitter','reddit','hatena','instapaper','line','linkedin','livejournal','mailru','ok','pinterest']}
            url ="aistudios.com"
            title = "best product ever"
            onSocialButtonClicked={ function (data) {
              console.log('helllooo',data)
            }} 

        />
      </header>
    </div>
  );
}

export default App;
