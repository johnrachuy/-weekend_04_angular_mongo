Weekend 4 with Angular and Mongo

Description

Another Blast From the Past!
This time around, we're going to refactor our To-Do list application from Weekend 4. This will be excellent practice for the last assessment. It will stretch your Angular knowledge and your new-found Mongo/Mongoose powers.

Replace jQuery with Angular
Your clientside will be refactored to use Angular. This means all your DOM manipulation will be changed to use Angular data binding and ng-repeats for display. Event listeners will have to change to ng-click or other Angular ngEvents.

Use a controller for this.

AJAX Factory
Move all of your AJAX calls to go through an Angular Factory. This will be great practice!

Replace POSTGRES with MongoDB
Move your data storage to MongoDB and use Mongoose to interact with your database. Use a Schema and Model to define your Task object.

ORIGINAL ASSIGNMENT
Hello Primers!

Welcome to your 4th weekend challenge! Full stack is pretty awesome huh? The idea in such a short time, you are able to spin up a full application architecture is pretty incredible. Also worth noting, there are only two weekend challenges left!

This weekend is all about showing us that you have a handle on each of the different parts of the full stack. For this weekends challenge, you are going to create a 'TO DO' application. This is the type of application that is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time, since chances are good that at some point in your career you will tackle this type of application, but in another language.

Here are the specific components for the challenge:

Create a front end experience that allows a user to create a task.
When the task is created, it should be stored inside of a database (SQL)
Whenever a task is created the front end should refresh to show all tasks that need to be completed.
Each task should have an option to 'Complete' or 'Delete'.
When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
Whether or not a task is complete should also be stored in the database.
Deleting a task should remove it both from the Front End as well as the Database.
Make sure that you also show us your best styling chops. We encourage you to try and write pure CSS rather than use Bootstrap.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

HARD MODE

In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interrupt this however you would like.

PRO MODE

Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.