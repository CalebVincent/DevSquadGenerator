// call dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// create the html template with anchors to be called later
function generateHTML(man, eng, int) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="../style/reset.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="../style/style.css">
    </head>
    
    <body>
        <header class="row">
            <p class="col-12">My Team</p>
        </header>
        <div class="container" id="main-container">
            <div class="row" id="content">
                <div class="card col-sm-3">
                    <div class="card-header">
                        <h3>${man.name}</h3>
                        <h4><i class="fas fa-tasks"></i> ${man.role}</h4>
                    </div>
                    <div class="card-body container">
                        <div class="attribute">ID: ${man.id}</div>
                        <div class="attribute">Email: ${man.email}</div>
                        <div class="attribute">Office number: ${man.officeNumber}</div>
                    </div>
                </div>
                ${eng}
                ${int}
            </div>
        </div>
    </body>
    </html>`
}
