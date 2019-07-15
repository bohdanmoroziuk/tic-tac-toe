import { render } from 'inferno';
import * as serviceWorker from './serviceWorker';

import App from './Game';
import './index.css';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
