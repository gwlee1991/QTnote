import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header);