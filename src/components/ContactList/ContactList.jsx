import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ children }) => (
  <ul className={css.list}>{children}</ul>
);

ContactList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
