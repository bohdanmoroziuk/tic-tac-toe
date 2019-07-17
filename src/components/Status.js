import { string } from 'prop-types';

const Status = ({ text }) => (
  <div className="status">
    <p className="status__text">
      {text}
    </p>
  </div>
);

Status.propTypes = {
  text: string.isRequired,
};

export default Status;