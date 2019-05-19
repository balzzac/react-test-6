import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class FormSuccess extends Component {
  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        phoneNumber,
        occupation,
        city,
        bio,
      },
    } = this.props;

    return (
      <MuiThemeProvider>
        <form className="l-form">
          <AppBar title="Success" showMenuIconButton={false} />
          <h1>Thank you!</h1>
        </form>
      </MuiThemeProvider>
    );
  }
}
