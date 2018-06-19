const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  title: { type: String },
  name: {type: String},
  dob: {type: String}
});

EmployeeSchema.statics.updateEmployeeRecord = function(id, name, dob, title) {
  const Employee = mongoose.model('employee');

  return this.findById(id)
    .then(employee => {
      const update = new Employee({ employee })
      //employee.push(update)
      return Promise.all([employee.save()])
        .then(([employee]) => employee);
    });
}

mongoose.model('employee', EmployeeSchema);
