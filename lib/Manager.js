const Employee = require('../lib/Employee.js')

test('creates a new manager object', () => {
 const manager = new Manager()
 
 expect(typeof manager).toBe("object")
 })

class Manager extends Employee {
 constructor (name, id, email, officeNumber){
  super(name, id, email)
  this.officeNumber = officeNumber
 }

 getRole() {
  return "Manager"
 }
}

module.exports = Manager