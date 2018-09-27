import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})


// ENZYME
// import React from 'react'
// import { shallow } from 'enzyme'
// import App from './App'

// it('renders without crashing', () => {
//   shallow(<App />)
// })



// shallow — renderuje tylko ten komponent (bez komponentów w nim zagnieżdżonych).
// Idealny do testów jednostkowych, bo masz pewność, że przypadkiem nie sprawdzasz zachowań innych komponentów w środku. Szybki.

// mount — komponent jest renderowany i montowany w DOM.
// Do testowania komponentów, które wchodzą w interakcje z DOM albo są udekorowane przez High Order Components

// render — renderuje komponent do statycznego HTML-a