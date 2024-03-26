# SocialHabit-HiFi

SocialHabit is a habit tracking app desinged with the idea of building new and better habits in a social enviorment.
Below is a description of the files present in this proiect:

## Experiment Data
In this folder you can find the data we collected during our reasearch. Each file represents one task and and the data collected for it. The data are json objects of each participants click  and the time at which they issued a click on our app when they were completing a task issued by us. We used this data to identify user mistakes, learnability of the app and the time it took each user to complete the tasks. The tasks represented different use cases for our application. We selected specific tasks that a user would perform daily or even multiple times a day, such that we can improve and adapt our app to our users needs.

## Implementation
This folder holds all the files of our Hi-fi prototype implementation. This is the implementation of our SocialHabit app in a interactive eviorment capable of almost fully imitaticing the full experience we wish to give with our final product. In this implementation we focused on the most common tasks a user would do in our app so that we would receive valuable feedback from our user research. The implementation folder containes: **images, scripts, styles and screens** and all of these files form the Hi-fi prototype. 
#### Images
This folder containes all the .png images we used throught the prototype
#### Scripts
This folder has different .js scripts that implement the different features of our application:
- change-days.js: in the ""Tasks"" screen we can see the days of the week present in a line, each with each own container. The day that is active has a different background color than the other days, this signifing that it is selected. When the users click or tap on another day the app will change to the according days tasks and make that days container active. In the Hi-fi prototype we only implemented that changeing of that days as loading the different tasks from memory was deemed unnecessary for the use reasearch.
- 
