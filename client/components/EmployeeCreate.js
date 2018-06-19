import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchEmployees';


class EmployeeCreate extends Component{ //using component level state
    constructor(props){
        super(props);
        this.state = {name: '', dob:'', title:''};
    }

    onSubmit(event){ //pass the text from the input field down to the gql mutation
        event.preventDefault();
        
            this.props.mutate({
                variables: { 
                    name: this.state.name,
                    dob: this.state.dob,
                    title: this.state.title
                },
                refetchQueries: [{ query: query}] 
            }).then(() => this.setState({name:'', dob:'', title:''}));
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Create a New Employee:</label>
                    <input placeholder="Full Name" className="input-box" type="text" onChange={event=>this.setState({ name: event.target.value })} value={this.state.name}/>
                    <input placeholder="Date of Birth" className="input-box" type="text" onChange={event=>this.setState({ dob: event.target.value })} value={this.state.dob}/>
                    <input placeholder="Title" className="input-box" type="text" onChange={event=>this.setState({ title: event.target.value })} value={this.state.title}/>
                    <i className="material-icons" onClick={this.onSubmit.bind(this)} >add</i><span>ADD EMPLOYEE</span>
                </form>
            </div>
        );
    }
}

const mutation = gql`
        mutation AddEmployee($name: String, $dob: String, $title: String){
            addEmployee(name: $name, dob: $dob, title: $title){
                    id  
                    name
                    dob
                    title
            }
        }
`;

export default graphql(mutation)(EmployeeCreate); //note that it is mutation passed into graphql helper and not query