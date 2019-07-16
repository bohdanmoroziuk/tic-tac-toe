import { render } from 'inferno';
import * as serviceWorker from './serviceWorker';
import { initDevTools } from 'inferno-devtools';

import App from './Game';
import './styles/index.css';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();

initDevTools();