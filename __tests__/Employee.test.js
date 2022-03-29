const Employee = require('../lib/Employee')

test('creates a new employee object', () => {
const employee = new Employee()

expect(typeof employee).toBe("object")
})

test('creates name from constructor arguments', () => {
 const name = "Ben"
 const employee = new Employee(name)

 expect(employee.name).toBe(name)
})
