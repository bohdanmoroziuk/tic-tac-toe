import Button from './Button';
import { string } from 'prop-types';

const Square = ({ value, ...restProps }) => (
  <Button 
    className="square" 
    {...restProps}
  >
    {value}
  </Button>
);

Square.propTypes = {
  value: string.isRequired,
};

export default Square;