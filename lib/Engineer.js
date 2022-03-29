const Employee = require('../lib/Employee.js')

test('creates a new engineer object', () => {
 const engineer = new Engineer()
 
 expect(typeof engineer).toBe("object")
 })

class Engineer extends Employee {
 constructor(name, email, id, github) {
  super(name, email, id)

  this.github = github
 }

 getGithub() {
  return this.github
 }

 getRole() {
  return "Engineer"
 }
}

module.exports = Engineer