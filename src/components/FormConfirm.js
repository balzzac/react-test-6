import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class FormConfirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // process form
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

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

    const valsAreOk =
      firstName && lastName && email && phoneNumber ? true : false;
    return (
      <MuiThemeProvider>
        <form className="l-form">
          <AppBar
            title="Confirm User Data. Step 3 out of 3"
            showMenuIconButton={false}
          />

          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Phone Number" secondaryText={phoneNumber} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          {valsAreOk && (
            <RaisedButton
              label="Confirm and Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          )}
        </form>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 20,
  },
};
