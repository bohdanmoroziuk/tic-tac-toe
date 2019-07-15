const Button = ({ value, children, ...restProps }) => (
  <button {...restProps}>
    {value || children}
  </button>
);

export default Button;