import Button from './Button';

const Square = ({ value, ...restProps }) => (
  <Button 
    className="square" 
    {...restProps}
  >
    {value}
  </Button>
);

export default Square;