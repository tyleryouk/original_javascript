import PropTypes from 'prop-types';
// PROJECT IMPORTS
import GuestGuard from 'utils/route-guard/GuestGuard';

// ==============================|| DASHBOARD LAYOUT ||============================== //

export default function Layout({ children }) {
  return <GuestGuard>{children}</GuestGuard>;
}

Layout.propTypes = { children: PropTypes.any };
