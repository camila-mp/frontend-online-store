import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as AiIcons from 'react-icons/ai';

import './FastCheckout.css';

class FastCheckout extends Component {
  render() {
    const { showFastCheckout, fastCheckout } = this.props;

    return (
      <div className={ showFastCheckout ? 'fast-checkout active' : 'fast-checkout' }>
        <AiIcons.AiOutlineClose onClick={ fastCheckout } />
      </div>
    );
  }
}

FastCheckout.propTypes = {
  showFastCheckout: PropTypes.bool.isRequired,
  fastCheckout: PropTypes.func.isRequired,
};

export default FastCheckout;
