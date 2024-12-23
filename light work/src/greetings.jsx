// conditional rendering using props
import PropTypes from "prop-types"


function Greet(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <p>Hello {props.userName}, welcome</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}

export default Greet;
