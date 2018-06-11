import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import HeaderComponent from './components/header';

ReactDOM.render(
	<div>
		<HeaderComponent />
	</div>,
	document.getElementById('root')
);

registerServiceWorker();
