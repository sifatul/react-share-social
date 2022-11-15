import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import App from '../App';
import SocialShare from '../components/ShareSocial';

test('check index page', () => {
  render(<App />);
  expect(screen.queryByTestId('multiple-icon-box')).toBeInTheDocument();
  expect(screen.queryByTestId('customizable-box')).toBeInTheDocument();
});

test('check page has facebook and twitter buttons', () => {
  render(<SocialShare
    socialTypes={['facebook', 'twitter']}
    url="http://sifatul.github.io/"
    onSocialButtonClicked={function (data) {
      console.log('helllooo', data)
    }}

  />);
  expect(screen.getByLabelText('facebook')).toBeInTheDocument();
  expect(screen.getByLabelText('twitter')).toBeInTheDocument();
});

test('check page has title', () => {
  render(<SocialShare
    socialTypes={['facebook', 'twitter']}
    title="this is the title"
    url="http://sifatul.github.io/"
    onSocialButtonClicked={function (data) {
      console.log('helllooo', data)
    }}

  />);
  expect(screen.queryByTestId('title')).not.toBeEmptyDOMElement()
});

test('check page shows url and copy btn', () => {
  render(<SocialShare
    socialTypes={['facebook', 'twitter']}
    url="http://sifatul.github.io/"
    onSocialButtonClicked={function (data) {
      console.log('helllooo', data)
    }}

  />);
  expect(screen.queryByTestId('url')).not.toBeEmptyDOMElement()
  expect(screen.queryByTestId('copy-btn')).not.toBeEmptyDOMElement()
});



test('check page renders custom style', () => {
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
  render(<SocialShare
    socialTypes={['facebook', 'twitter']}
    url="http://sifatul.github.io/"
    onSocialButtonClicked={function (data) {
      console.log('helllooo', data)
    }}
    title="title of the component"
    style={style}

  />);
  expect(screen.queryByTestId('title')).toHaveStyle(`color:aquamarine`)
  expect(screen.queryByTestId('root')).toHaveStyle(`color:white`)
  expect(screen.queryByTestId('url')).toHaveStyle(`background:rgb(0,0,0,0.7)`)
});

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  window.open = jest.fn();
  render(<SocialShare
    socialTypes={['facebook', 'twitter']}
    url="http://sifatul.github.io/"
    onSocialButtonClicked={handleClick}

  />);

  fireEvent.click(screen.getByLabelText('facebook'))
  expect(handleClick).toHaveBeenCalledTimes(1)
  window.open.mockClear();
})