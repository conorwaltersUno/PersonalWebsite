import React, { Fragment } from 'react';
import loading from '../../assets/loading.gif';

export default () => (
  <Fragment>
    <img
      src={loading}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
