# react-share-social

UI component to share contents in Social media.


## Demo

[Demo](https://sifatul.github.io/react-share-social/).


## Features

share UI support for:
  - Facebook
  - WhatsApp
  - Twitter 
  - LinkedIn 
  - Reddit 
  - Line 
  - Instapaper
  - Hatena
  - email  
  - Live Journal
  - Ok
  - Mailru

  
## Install

```js
npm install react-share-social --save
``` 
## Usage

React-share-social component don't pollute the global scope.

```js
import {ShareSocial} from 'react-share-social' 

const style = {
  root:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
};
export default function RSSUsage() {
  return <ShareSocial 
     style={style}
     url ="url_to_share.com"
     socialTypes={['facebook','twitter','reddit','linkedin']}
   />
}


```
## Callback

 react-share-social component provides a a helpful callback everytime a social media icon is clicked

```js
import {ShareSocial} from 'react-share-social' 
 

export default function RSSCallback() { 
    return  <ShareSocial  
                 onSocialButtonClicked={ data=> console.log(data)}    
            />
}
//socialType: "twitter"
```
## Props

- `url`: content to be shared 

- `socialTypes`: array of button names in lower case

- `onSocialButtonClicked`: Callback function to receive a data everytime any social button is clicked

- `style`: Allow inline custom css of the root

- `title`: title of the component

Example:

```jsx
<ShareSocial title={'sharing happiness'} />
```
## Custom Styles

 react-share-social component provides a style property. These properties are always applied to the root element.

```js
import {ShareSocial} from 'react-share-social' 

// We can use inline-style
const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

export default function InlineStyle() { 
    return <ShareSocial style={style} />
}
```

## License

MIT

