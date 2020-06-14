import React, { Component } from "react";
import PropTypes from "prop-types";

class Landing extends Component {

      render() {
        return (
          <div className="container">
            <h3 className="header">Landing</h3>
            <button>Join</button>
            <button>Start</button>
          </div>
        );
      }
    }
Landing.propTypes = {
    userId: PropTypes.string,
    token: PropTypes.string,
}