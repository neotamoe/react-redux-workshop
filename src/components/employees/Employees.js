import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';

class Employees extends Component {

  constructor(props) {
  super(props);

  //Replaces the previously hard-coded state assignment (see below for reference)
  props.actions.listEmployees();
}

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pageConfig: {
  //       data: [
  //         {
  //           "_id": 1,
  //           "username": "admin",
  //           "email": "admin@mixtape.com",
  //           "password": "password",
  //           "admin": true,
  //           "firstName": "Admin",
  //           "lastName": "User"
  //         },
  //         {
  //           "_id": 2,
  //           "username": "user",
  //           "email": "user@mixtape.com",
  //           "password": "password",
  //           "admin": false,
  //           "firstName": "Normal",
  //           "lastName": "User"
  //         }
  //       ]
  //     }
  //   };
  // }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees</PageHeader>
        </Row>
        <Row>
          <EmployeeTable employees={this.props.employees} actions={this.props.actions}/>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees.employees
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EmployeeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
