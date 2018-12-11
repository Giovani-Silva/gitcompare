import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

const ButtomAction = ({
  action, color, id, icon, title,
}) => (
  <Btn href="#" color={color} onClick={e => action(id, e)}>
    <i className={`fa fa-${icon}`} aria-hidden="true" />
    {title || ''}
  </Btn>
);

ButtomAction.defaultProps = {
  action: () => 'set the action in ButtonAction',
  color: '',
  title: '',
};

ButtomAction.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.func,
};

export default ButtomAction;
