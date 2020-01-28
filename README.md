# DevSquadGenerator

This application takes user input obtained from the command line then generates informational cards based on what the user entered. User input is restricted to match expected outputs. When all fields have been completed, information for each user will be displayed onto their own card, creating the developer team (Manager, Engineer, Intern).

# Getting Started

This command line application begins with questions for the manager. When the manager questions are answered the user will be prompted for the amount of engineers and interns on the team. Then, the user will answer the questions for each individual number of engineers and interns entered, including github username and school affiliation.

After all members of the team have been described, the program makes an AJAX call to the github API which will then return the github profile for the engineer(s) on the team (if a valid github username is entered).

Once the AJAX call is finished and all members have been described, the pre-populated HTML template will be filled with previously entered information along with CSS styling in the output folder.

# User Story
```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```
# Business Context

It is imperative to be able to access contact info and current/previous work of an employee as a manager. Instead of searching the internet for information on each individual, it would be faster to simply enter the name and information to have on display yourself. This application allows a manager to build a roster for employee's basic info so that such information can be accessed in a more organized manner.