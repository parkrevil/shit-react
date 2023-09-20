import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return <div>My Component {name}<br/>{children}<br/>{favoriteNumber}</div>;
}

MyComponent.defaultProps = {
  name: 'default name',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
