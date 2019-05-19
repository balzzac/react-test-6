import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleFieldsChange } = this.props;

    return (
      <MuiThemeProvider>
        <form className="l-form">
          <AppBar
            title="Enter Other Details Step 2 out of 4"
            showMenuIconButton={false}
          />
          <TextField
            hintText="Enter your Occupation"
            floatingLabelText="Occupation"
            onChange={handleFieldsChange('occupation')}
            required={true}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter your City"
            floatingLabelText="City"
            onChange={handleFieldsChange('city')}
            required={true}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter your Bio"
            floatingLabelText="Bio"
            onChange={handleFieldsChange('bio')}
            required={true}
            defaultValue={values.bio}
          />
          <br />

          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />

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
    margin: 20,
  },
};
