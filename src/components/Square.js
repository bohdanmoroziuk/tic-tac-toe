import Button from './Button';
import { acceptStringOrNull } from '../helpers';

const Square = ({ value, ...restProps }) => (
  <Button 
    className="square" 
    {...restProps}
  >
    {value}
  </Button>
);

Square.propTypes = {
  value: acceptStringOrNull,
};

export default Square;