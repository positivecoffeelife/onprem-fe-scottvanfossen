const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql;
const GraphQLDate = require('graphql-date');
const mongoose = require('mongoose');
const Employee = mongoose.model('employee');
const EmployeeType = require('./employee_type');
const { find, filter } = require('lodash');

//Mutation time!
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        title: { type: GraphQLString },
        name: { type: GraphQLString},
        dob: { type: GraphQLString }
      },
      resolve(parentValue, { title, name, dob }) {
        return (new Employee({ title, name, dob })).save()
      }
    },
    updateEmployeeRecord: {
      type: EmployeeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        name: { type: GraphQLString },
        dob: { type: GraphQLString }
      },
      async resolve(parentValue, args) {
         return await Employee.findByIdAndUpdate(args.id, args, { new: true })
        .catch(err => new Error(err));
      }
    },
    deleteEmployee: {
      type: EmployeeType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Employee.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
