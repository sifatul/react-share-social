import { render, screen } from '@testing-library/react';
import App from './App';
import SocialShare from './components/ShareSocial';

test('check index page', () => {
  render(<App />);
  // const linkElement = screen.getByText(/Copy/i);
  // aria-label="facebook"
  expect(screen.getByLabelText('facebook')).toBeInTheDocument();
  expect(screen.getByLabelText('twitter')).toBeInTheDocument();
  expect(screen.getByLabelText('line')).toBeInTheDocument();
  expect(screen.getByLabelText('linkedin')).toBeInTheDocument();
});

test('check facebook page has buttons page', () => {
  render(<SocialShare
    socialTypes={['facebook']}
    url="http://sifatul.github.io/"
    quote="Share and get amazing products"
    onSocialButtonClicked={function (data) {
      console.log('helllooo', data)
    }}

  />);
  // const linkElement = screen.getByText(/Copy/i);
  // aria-label="facebook"
  expect(screen.getByLabelText('facebook')).toBeInTheDocument();
  // expect(screen.getByLabelText('twitter')).toBeFalsy();
  // expect(screen.getByLabelText('line')).not.toBeInTheDocument();
  // expect(screen.getByLabelText('linkedin')).not.toBeInTheDocument();
});
