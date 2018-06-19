import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import fetchEmployees from '../queries/fetchEmployees';
import query from '../queries/fetchEmployees';
import { Link, hashHistory } from 'react-router';


class EmployeeUpdate extends Component{

    constructor(props){
        super(props);
        this.state = { }; 
    }

    onSubmit(event){
        
        event.preventDefault();

        this.props.mutate({ 
            variables: { 
                title: this.state.title,
                id: this.props.id,
                dob: this.state.dob,
                name: this.state.name
            },
            refetchQueries: [{ query: fetchEmployees }]
        }).then(() => hashHistory.push('/'));
    }

    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input placeholder="Update Full Name" className="input-box" type="text" onChange={event=>this.setState({ name: event.target.value })} value={this.state.name}  />
                <input placeholder="Update Date of Birth" className="input-box" type="text" onChange={event=>this.setState({ dob: event.target.value })} value={this.state.dob}  />
                <input placeholder="Update Title" className="input-box" type="text" onChange={event=>this.setState({ title: event.target.value })} value={this.state.title}  />
                <i className="material-icons" onClick={this.onSubmit.bind(this)} >add</i><span>UPDATE EMPLOYEE</span>
            </form>
        );
    }
}

const mutation = gql`
    mutation UpdateEmployeeRecord($id: ID!, $name: String, $dob: String, $title: String){
        updateEmployeeRecord(id: $id, name: $name, dob: $dob, title: $title ){
            id
            name
            dob
            title
        }
    }
`;

export default graphql(mutation)(EmployeeUpdate);
