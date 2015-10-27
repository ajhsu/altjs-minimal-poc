import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './view';

let app = ReactDOMServer.renderToString(<App/>);
console.log(app);