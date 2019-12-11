import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var restName = 'absinthe-brasserie-and-bar';

ReactDOM.render(<App restName={restName}/>, document.getElementById('gallery'));