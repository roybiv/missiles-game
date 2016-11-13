
import React, { Component } from 'react';

import Profile from './Profile';


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../../actions/auth'

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
