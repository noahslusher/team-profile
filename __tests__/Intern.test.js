const Intern = require('../lib/Intern.js')

test('creates a new intern object', () => {
 const intern = new Intern()
 
 expect(typeof intern).toBe("object")
 })

test('gets the interns school name', () => {
 const schoolTest = "USC"
 const intern = new Intern("", 123, "", schoolTest)

 expect(intern.school).toEqual(expect.any(String))
})


test('getSchool() gets interns school name', () => {
 const intern = new Intern("", 123, "", "USC")

 expect(intern.getSchool()).toEqual(expect.any(String))
})


test('getRole() returns "Intern"', () => {
 const intern = new Intern()

 expect(intern.getRole()).toBe("Intern")
})