import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleFieldsChange } = this.props;
    return (
      <MuiThemeProvider>
        <form className="l-form">
          <AppBar
            title="Enter User Details Step 1 out of 4"
            showMenuIconButton={false}
          />
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={handleFieldsChange('firstName')}
            required={true}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={handleFieldsChange('lastName')}
            required={true}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={handleFieldsChange('email')}
            required={true}
            type="email"
            defaultValue={values.email}
          />
          <br />
          <TextField
            hintText="Enter your Phone Number"
            floatingLabelText="Phone Number"
            onChange={handleFieldsChange('phoneNumber')}
            required={true}
            type="tel"
            defaultValue={values.phoneNumber}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </form>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: '20px 0',
  },
};
