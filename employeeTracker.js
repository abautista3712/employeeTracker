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
          "View All Roles",
          "View All Departments",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Update Employee",
        ],
      },
    ])
    .then((response) => {
      const { action } = response;

      switch (action) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Roles":
          viewAllRoles();
        case "View All Departments":
          viewAllDepartments();
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        // case "Update Employee":
        //   updateEmployee();
        //   break;
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
}

function viewAllDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
    if (err) throw err;
    console.table(data);
    start();
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM role", function (err, data) {
    console.table(data);
    start();
  });
}

// function addDepartment() {
//   inquirer
//     .prompt({
//       name: "newDepartment",
//       type: "input",
//       message: "Please input the name of the department you would like to add:",
//     })
//     .then(function (response) {
//       console.log(response);
//       connection.query(
//         "INSERT INTO department (name) VALUES ?",
//         response.name,
//         function (err, data) {
//           console.log(data);
//         }
//       );
//       console.log("Department successfully added!");
//       viewAllDepartments();
//     });
// }

// function addRole() {}

// function addEmployee() {}

// // function updateEmployee() {}

// function finishedAdding() {
//   fs.writeFile(outputPath, render(employees), (err, data) => {
//     console.log("Team has been created successfully!");
//   });
// }
