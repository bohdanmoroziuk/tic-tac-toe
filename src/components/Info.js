import { string } from 'prop-types';

import Status from './Status';
import History from './History';

const Info = ({ status, history, jumpTo }) => (
  <div className="info">
    <Status {...{status}} />
    <History {...{history, jumpTo}} />
  </div>
);

Info.propTypes = {
  status: string.isRequired,
};

export default Info;