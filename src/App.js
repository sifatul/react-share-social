// import logo from './logo.svg';
import './App.css';

import SocialShare from './components/ShareSocial'

import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialShare
          socialTypes={['facebook', 'twitter', 'line', 'linkedin', 'reddit', 'whatsapp', 'instapaper', 'livejournal', 'mailru', 'ok', 'pinterest']}
          url="http://sifatul.github.io/"
          quote="Share and get amazing products"
          onSocialButtonClicked={function (data) {
            console.log('helllooo', data)
          }}

        />
      </header>
    </div>
  );
}

export default App;
