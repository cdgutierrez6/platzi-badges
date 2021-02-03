// const element = document.createElement('h1');
// element.innerText = 'Hello, Cristian Daniel';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App';

// const nombre = "Daniel";
// const jsx = <h1>Hola, Aprendiendo React en Platzi Badges</h1>;
// const jsx = <h1>Hola, soy {nombre}</h1>
// const jsx = ( <div>
//     <h1>Hola, soy Cristian</h1>
//     <p>Soy Ingeniero frontend</p>
// </div>
// );
// Aternativa no tan legible
// const element = React.createElement('a', {href:'https://platzi.com'}, 'Ir a platzi');
// const element = React.createElement('h1', {}, `Hola, Soy ${nombre}`);
const container = document.getElementById('app');

// ReactDOM.render(__Qué__, __Dónde__);
// Este es cuando se importa el Badge de Components
// ReactDOM.render(
//     <Badge 
//         firstName="Daniel" 
//         lastName="Gutierrez" 
//         avatarUrl = "https://s.gravatar.com/avatar/081ece6db33c3a4c1a7f193222230792?s=80"
//         jobTitle="Fronend Engineer" 
//         twitter="cdgutierrez6"
//     />, 
//     container);
ReactDOM.render(<App />, container);