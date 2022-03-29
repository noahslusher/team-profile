const Manager = require('../lib/Manager.js')

test('Gets managers office number', () => {
 const testNumber = 1234
 const manager = new Manager("Ben", 1234, "test@test.com", testNumber)

 expect(manager.officeNumber).toEqual(expect.any(Number))
})


test('getRole() returns "Manager"', () => {
 const manager = new Manager()
 expect(manager.getRole()).toBe("Manager")
})