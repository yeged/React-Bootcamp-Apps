/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
const Buttons = ({ className, onClick, children }) => (
  <div>
    <button className={className} type="button" onClick={onClick}>{children}</button>
  </div>
);

export default Buttons;
