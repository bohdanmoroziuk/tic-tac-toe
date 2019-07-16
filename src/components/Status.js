import { string } from 'prop-types';

const Status = ({ status }) => (
  <div className="status">
    <p className="status__message">
      {status}
    </p>
  </div>
);

Status.propTypes = {
  status: string.isRequired,
};

export default Status;