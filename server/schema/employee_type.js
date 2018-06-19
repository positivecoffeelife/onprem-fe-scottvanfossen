const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Employee = mongoose.model('employee');

const EmployeeType = new GraphQLObjectType({
  name:  'EmployeeType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    title: { type: GraphQLString },
    dob: { type: GraphQLString }
  })
});

module.exports = EmployeeType;
