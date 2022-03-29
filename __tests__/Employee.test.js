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


test('creates id from constructor arguments', () => {
 const testId = '1234'
 const employee = new Employee("Ben", testId)
 expect(employee.id).toBe(testId)
})


test('Creates email from constructor arguments', () => {
 const testEmail = 'test@test.com'
 const employee = new Employee('Ben', 1234, testEmail)

 expect(employee.email).toBe(testEmail)
})


test('Gets the employee name from getName()', () => {
 const employee = new Employee("Ben")

 expect(employee.getName()).toEqual(expect.any(String))
})

test('Gets the employee id from getId()', () => {
 const employee = new Employee("Ben", 1234)
 
 expect(employee.getId()).toEqual(expect.any(Number))
})


test('Gets the employee email from getEmail()', () => {
 const employee = new Employee("Ben", 1234, "test@test.com")

 expect(employee.getEmail()).toEqual(expect.any(String))
})


test('getRole() returns "employee"', () => {
 const employee = new Employee("Ben", 1234, "test@test.com")

 expect(employee.getRole()).toBe("Employee")
})