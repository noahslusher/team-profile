const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const OUTPUT_DIR = path.resolve(__dirname, "output") 
const outputPath = path.join(OUTPUT_DIR, "team.html")
console.log(outputPath)

const render = require('./dist/htmlRender')


const startQuestions = [
  {
    type: 'confirm',
    name: 'confirmManager',
    message: 'Are you the manager?',
    default: true,
  },
  {
    type: 'input',
    name: 'managerName',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'managerId',
    message: 'What is your ID number?',
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'What is your office number?',
  },
]

const teamQuestions = [

  {
    type: 'list',
    name: 'teamChoices',
    message: 'Which type of team member would you like to add?',
    choices: ['Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'teamName',
    message: "What is the team member's name",
  },
  {
    type: 'input',
    name: 'teamId',
    message: "What is the team member's ID number?",
  },
  {
    type: 'input',
    name: 'teamEmail',
    message: "What is the team member's email?",
  },
]



let team = []
const generateTeam = () => {
  inquirer
    .prompt(startQuestions)

    .then((ans1) => {
      inquirer
        .prompt(teamQuestions)

        .then((ans2) => {
          inquirer
            .prompt([
              {
                when: () => ans2.teamChoices === "Engineer",

                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?",
              },
              {
                when: () => ans2.teamChoices === "Intern",
                type: 'input',
                name: 'school',
                message: "What is the name of the school the intern is attending?",
              },
              {
                when: () => ans2.teamChoices === "Intern" || ans2.teamChoices === "Engineer",
                type: 'confirm',
                name: 'memberAdd',
                message: "Would you like to add another member to your team?",
                default: true,
              },
            ])

            .then((ans3) => {
              if (ans1.confirmManager) {
                const manager = new Manager(ans1.managerName, ans1.managerId, ans1.managerEmail, ans1.managerOfficeNumber)
                team.push(manager)
              }

              if (ans2.teamChoices === "Engineer") {
                const engineer = new Engineer(ans2.teamName, ans2.teamId, ans2.teamEmail, ans3.github)
                team.push(engineer)
              }

              if (ans2.teamChoices === "Intern") {
                const intern = new Intern(ans2.teamName, ans2.teamId, ans2.teamEmail, ans3.school)
                team.push(intern)
              }

              if (ans3.memberAdd) {
                teamAddOn()
              } else {
                team.forEach((team) => {
                  console.log(team)
                })
                fs.writeFile(outputPath, render(team), (err) => {
                  if (err) {
                    throw err
                  }
                  console.log('success')
                })
              }
            })


        })
    })
}

const teamAddOn = () => {
  inquirer
    .prompt(teamQuestions)

    .then((ans2) => {
      inquirer
        .prompt([
          {
            when: () => ans2.teamChoices === "Engineer",

            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
          },
          {
            when: () => ans2.teamChoices === "Intern",
            type: 'input',
            name: 'school',
            message: "What is the intern's school name?",
          },
          {
            when: () => ans2.teamChoices === "Intern" || ans2.teamChoices === "Engineer",
            type: 'confirm',
            name: 'memberAdd',
            message: "Would you like to add another member to your team?",
            default: true,
          },
        ])

        .then((ans3) => {
          if (ans2.teamChoices === "Engineer") {
            const engineer = new Engineer(ans2.teamName, ans2.teamId, ans2.teamEmail, ans3.github)
            team.push(engineer)
          }

          if (ans2.teamChoices === "Intern") {
            const intern = new Intern(ans2.teamName, ans2.teamId, ans2.teamEmail, ans3.school)
            team.push(intern)
          }

          if (ans3.memberAdd) {
            teamAddOn()
          } else {
            team.forEach((team) => {
              console.log(team)
            })
            fs.writeFile(outputPath, render(team), (err) => {
              if (err) {
                throw err
              }
              console.log('success')
            })
          }
        })
    })
  .catch((err) => {
    if (err) {
      throw err
    }
  })
}


generateTeam()
