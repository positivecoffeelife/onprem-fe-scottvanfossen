import gql from 'graphql-tag';

export default gql`
    query EmployeeQuery($id: ID!) {
        employee (id: $id) {
            id
            name
            dob
            title
        }
    }
`;