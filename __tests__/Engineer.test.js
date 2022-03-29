const Engineer = require('../lib/Engineer.js')


test('creates a new engineer object', () => {
 const engineer = new Engineer()
 
 expect(typeof engineer).toBe("object")
 })


test('checks for github username', () => {
 const github = "test"
 const engineer = new Engineer("Ben", 1234, "test@test.com", github)

expect(engineer.github).toEqual(expect.any(String))
})

test('getGithub() gets engineers github username', () => {
 const engineer = new Engineer("Ben", 1234, "test@test.com", "github")

 expect(engineer.getGithub()).toEqual(expect.any(String))
})

test('getRole() returns "Engineer"', () => {
 const engineer = new Engineer()

 expect(engineer.getRole()).toBe("Engineer")
})