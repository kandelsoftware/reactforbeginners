import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  myInput = React.createRef();
  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Enter store "
          defaultValue={getFunName()}
        />
        <button type="submit">visit store</button>
      </form>
    );
  }
}

export default StorePicker;
