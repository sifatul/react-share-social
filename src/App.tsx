// import logo from './logo.svg';
import './App.css';

import { ShareSocial } from './components/index'

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  App: {
    backgroundColor: '#282c34',
    color: 'white',
    minHeight: '100vh',
    flexDirection: 'column',
    padding: '25px'
  },
  AppHeader: {
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '2.25rem',
    lineHeight: 1.2,
    maxWidth: '933px'
  },
  AppSubHeader: {
    fontSize: '1.125rem',
    lineHeight: 1.2,
    paddingBottom: '16px',
    fontWeight: 400

  },
  Box: {
    paddingBottom: '40px'
  }

});



const style = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',

  },
  copyContainer: {
    border: '1px solid blue',
    background: 'rgb(0,0,0,0.7)',
    display: 'none'
  },
  title: {
    color: 'aquamarine',
    fontStyle: 'italic'
  }
};
function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <div className={classes.Box} data-testid="multiple-icon-box">

        <header className={classes.AppHeader}>
          Multiple social icons
      </header>
        <h1 className={classes.AppSubHeader}>
          Each Social Icon triggers a callback
      </h1>


        <ShareSocial
          socialTypes={['facebook', 'twitter', 'line', 'linkedin', 'whatsapp', 'viber', 'telegram', 'reddit', 'instapaper', 'livejournal', 'mailru', 'ok', 'hatena',
            'email', 'workspace']}
          url="http://sifatul.github.io/"
          onSocialButtonClicked={(buttonName: string) => {
            console.log(`${buttonName} clicked`)
          }}
          title="Share and get amazing products"
        />
      </div>


      <div className={classes.Box} data-testid="customizable-box">
        <header className={classes.AppHeader}>

          Everything is customizable
      </header>
        <h1 className={classes.AppSubHeader}>
          Custom styles applicable to the all parts of the UI
      </h1>
        <ShareSocial
          socialTypes={['facebook', 'twitter', 'line', 'linkedin', 'whatsapp', 'viber', 'telegram']}
          url="http://sifatul.github.io/"
          title="Share and get amazing products"
          onSocialButtonClicked={(buttonName: string) => {
            alert(`${buttonName} clicked`)
          }}
          style={style}
        />

      </div>

    </div>
  );
}

export default App;
