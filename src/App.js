import logo from './logo.svg';
import './App.css';

import SocialShare from './components/index'
import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialShare
          socialTypes={['facebook', 'twitter', 'line', 'linkedin','reddit', 'hatena', 'instapaper',  'livejournal', 'mailru', 'ok', 'pinterest']}
          url="http://sifatul.github.io/"
          title="Share and get amazing products"
          onSocialButtonClicked={function (data) {
            console.log('helllooo', data)
          }}

        />
      </header>
    </div>
  );
}

export default App;
