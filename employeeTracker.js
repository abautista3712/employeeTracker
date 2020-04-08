const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

// What would you like to do?
// [REQUIRED] View All Employees
// View All Employees By Department
// View ALl Employees By Manager
// [REQUIRED] Add Department
// [REQUIRED] Add Role
// [REQUIRED] Add Employee
// Remove Employees
// [REQUIRED] Update Employee Role
// Update Employee Manager

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  start();
});

function start() {
  return inquirer
    .prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
      },
    ])
    .then((response) => {
      const { action } = response;

      switch (action) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee":
          updateEmployee();
          break;
        default:
          break;
      }
    });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    start();
  });
  //   inquirer
  //     .prompt([
  //       {
  //         name: "officeNumber",
  //         type: "input",
  //         message: "What is the Manager's office number?",
  //       },
  //       { name: "done", type: "confirm", message: "Finished adding employees?" },
  //     ])
  //     .then((response) => {
  //       const { employeeName, employeeId, employeeEmail } = employeeInfo;
  //       const { officeNumber } = response;

  //       let newManager = new Manager(
  //         employeeName,
  //         employeeId,
  //         employeeEmail,
  //         officeNumber
  //       );
  //       employees.push(newManager);
  //       if (response.done) {
  //         finishedAdding();
  //       } else {
  //         createTeam();
  //       }
  //     });
}

function addDepartment() {}

function addRole() {}

function addEmployee() {}

function updateEmployee() {}

function finishedAdding() {
  fs.writeFile(outputPath, render(employees), (err, data) => {
    console.log("Team has been created successfully!");
  });
}
