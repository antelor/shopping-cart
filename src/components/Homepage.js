import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="Homepage">
        <button><Link to="/shop">Shop now</Link></button>
      </div>
    );
  }
}

export default Homepage;
