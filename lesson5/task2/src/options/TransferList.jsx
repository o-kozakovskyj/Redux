import React, { Component } from 'react';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

class TransferList extends Component {
  render() {
    return (
      <div className="transfer-list">
        <AvailableOptions title={'Available'} />
        <SelectedOptions title={'Selected'} />
      </div>
    );
  }
}

export default TransferList;
