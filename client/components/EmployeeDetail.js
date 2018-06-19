import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchEmployee from '../queries/fetchEmployee';
import { Link } from 'react-router';
import EmployeeUpdate from './EmployeeUpdate';


class EmployeeDetail extends Component{
    render(){

        const { employee } = this.props.data;
        
        if (!employee){ return <div>Loading...</div> } 

        return(
            <div>
                <div className="nav-wrapper">Editing Employee: {employee.name}</div>
                <Link to="/">Back</Link>
                <ul className="collection">
                    <li key={employee.id} className="collection-item">
                        <span className="s4">{employee.name}</span>
                        <span className="s4">{employee.dob}</span>
                        <span className="s4">{employee.title}</span>
                    </li>
                </ul>
                <EmployeeUpdate id={this.props.params.id}/>
            </div>
        );
    }
}

export default graphql(fetchEmployee, {
    options: (props) => { return { variables: { id: props.params.id } } }
})(EmployeeDetail);