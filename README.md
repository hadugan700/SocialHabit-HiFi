# SocialHabit-HiFi

SocialHabit is a habit tracking app designed with the idea of building new and better habits in a social environment.
Below is a description of the files present in this project:

## Experiment Data
In this folder you can find the data we collected during our research. Each file represents one task and the data collected for it. The data are Json objects of each participants click and the time at which they issued a click on our app when they were completing a task issued by us. We used this data to identify user mistakes, learnability of the app and the time it took each user to complete the tasks. The tasks represented different use cases for our application. We selected specific tasks that a user would perform daily or even multiple times a day, such that we can improve and adapt our app to our user’s needs.

## Implementation
This folder holds all the files of our Hi-fi prototype implementation. This is the implementation of our SocialHabit app in a interactive environment capable of almost fully imitating the full experience we wish to give with our final product. In this implementation we focused on the most common tasks a user would do in our app so that we would receive valuable feedback from our user research. The implementation folder contains: **images, scripts, styles and screens** and all of these files form the Hi-fi prototype. 
#### Images
This folder contains all the .png images we used throughout the prototype
#### Scripts
This folder has different .js scripts that implement the different features of our application:
- change-days.js: in the ""Tasks"" screen we can see the days of the week present in a line, each with each own container. The day that is active has a different background color than the other days, this signifying that it is selected. When the users click or tap on another day the app will change to the according days tasks and make that day’s container active. In the Hi-fi prototype we only implemented the changing of the days as loading the different tasks from memory was deemed unnecessary for the use research.
- new-friend.js: this script handles the adding of a new friend trough their username. After the user inputs the username the script adds the friend to the user’s friend list with their according profile picture, name and level
- new-pic.js: we wanted the users to be able to change their profile picture so that they get a small taste of the customization we have planned for the final product. When the user clicks on their profile picture, a modal appears and prompts the user for a file to replace the already existing picture. After the user selects a file, the image is replaced and the user now has a new profile picture.
- new-task.js: this is the main part of our Hi-fi prototype as it is the most import part of the application. We wanted the creating, editing and deletion of the task to be as close to the final product as possible as to give the users a nice experience with our prototype. When in the tasks screen, the users can click on the plus icon to create a new task, inputting its name, description and start and end time. The user can also click on the task container to edit, complete or delete the task. This script handles the intelligence needed to handle all of these features.
- script.js: this script handles the menu pop-up where user can change screens and the tracking of the user clicks on the screens. The tracking saves the click’s x and y position on the screen and also the time at which the user clicked.
#### Styles
This folder has all the .css files we used to customize our app to offer a pretty interface for our app, such that user satisfaction could be higher. We have a .css file for each of the screen, each one customizing the components of the screen.
#### Screens
All the .html files are the base components of our application. These html files are rendered on our laptops in a browser such that the user can interact with our Hi-fi prototype. They each represent one screen of our app: Tasks, Profile, Friends, Achievements

## KLM Calculations
In this section we have the specific KLM calculations for each task done as intended by one of our group members. Each task in divided in steps that are then added together to get the final result for that task.

## Prototyping & Experimentation
This folder holds all of our previous prototypes and assignments regarding the group projects and the questionnaires we used for the last assignment to gather our data.
- Ethical consent form: we collected the personal data of the users that participated in our project. We needed to make sure that they understand and agree to the terms of our research project. This form informs them about the terms and they can sign it if they agree and would like to participate in our research.
- First-ui approach, Hi-fi, Lo-fi, Prototype.md: here we have several development stages of SocialHabit throughout the length of the course, each one marking a significant step in our journey to reach the final hi-fi prototype we used in our project
## Design Rationales
In this document we explain the concept of SocialHabit and the steps we took to get to the final vision we had for our project. It details the features we wanted the app to had and the ones that made it in the final version. It explains our thought processes and why we decided to go in this direction with our app. The document explains also how we build the different versions from the Lo-fi prototype to the final version.
## Use Case Definition]
In this document we describe the use cases of our app and what we wanted to achieve with its implementation. It explains our vision and the overall feel of the application. We also give an example of a normal use of the app for tracking one’s habits while also interacting with their friend group 
