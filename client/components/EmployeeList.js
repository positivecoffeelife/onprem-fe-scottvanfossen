import React, { Component } from 'react';
import gql from 'graphql-tag'; //helper to write query in component file like this
import { graphql } from 'react-apollo'; //another helper to bond query to component
import { Link } from 'react-router'; //generates link tag
import query from '../queries/fetchEmployees';
import EmployeeCreate from './EmployeeCreate';

class EmployeeList extends Component{

    onEmployeeDelete(id){
        this.props.mutate({ variables: { id: id } })
        .then(() => this.props.data.refetch());
        //calls the mutation and passes along the id of the employee then refetches any query associated with EmployeeList component
    }

    renderEmployees(){ //helper method to write out employee to page
        return this.props.data.employees.map(({ id, name, dob, title}) => { // for every employee found, return one of them
            return(//key is used to uniquely identify each <li>
                <li key={id} className="collection-item">
                    <span className="s4">{name}</span>
                    <span className="s4">{dob}</span>
                    <span className="s4">{title}</span>
                    <Link to={`/employee/${id}`}><i className="material-icons">edit</i></Link>
                    <i className="material-icons" onClick={()=> this.onEmployeeDelete(id)}>delete</i>
                </li>
            );
        });
    }

    render(){
        if (this.props.data.loading){
            return <div>Loading...</div>; //use this if data still needs time to complete
        } 
        
        return (//make sure the dang () is below when calling the method
            <div>
                <div className="nav-wrapper">Employees</div>
                <EmployeeCreate />
                
                <ul className="collection">
                    {this.renderEmployees()}
                </ul>
            </div>
        );        
    }
}

const mutation = gql`
    mutation DeleteEmployee($id: ID){
        deleteEmployee(id: $id){
            id
        }
    }
`;

export default graphql(mutation)(
    graphql(query)(EmployeeList)
 );