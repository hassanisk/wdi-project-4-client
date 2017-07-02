#WDI-Project-4

Welcome to **"Pocket Fit"** fitness web application. Fourth project for *WDI-LONDON* using ***Ruby on Rails*** and ***AngularJS***.
The app could be found here: [Pocket FIt] (https://pocket-fit.herokuapp.com/)


##Introduction
After long years of working out at the gym, I got stuck into routine of doing the same exercises. I had an idea of creating an app which allows you to generate a random workout. **Pocket Fit** is a modern fitness app targeted towards any fitness lover.

##Planning
###Database Design<hr>

<img width="476" alt="database" src="http://i.imgur.com/oJr68ay.png"> <br>
First step was planning the databeses models and relationships. I started drawing the relationships on ***Pages***.<br> Then when I decided, I showed the TA's and discussed how could I improve it.<br><br>

###Trello<hr>
<img width="476" alt="trello" src="http://i.imgur.com/4wcKzCY.png"> <br>
This project had 12 days deadline. I used ***Trello*** to manage my time, divide day by day tasks, set priorities using colorful labels and to keep track the progess.<br><br>

 
###Pseudocoding<hr>
I always make sure to start with pseudocoding to be clear and refer to it when its needed.<br><br>


##Bulding the APIs

###Authentication<hr>
The first step was creating the user model with authentication using ***Insomnia*** cross-platform application to test and debugging HTTP requests.<br>
Then, I moved to the front end to build the register and login pages and test them.<br>
###Exercise, Favourites, and Diet Models<hr>
This step was very important since the whole app functionality relies on it. After clear planning, creating the tables was straight forward.<br>
Exercise and diet models were two stand-alone tables and Favourites table has a "one to many" relationship with the user model.



##Creating the workout generator

###Navigation and layout<hr>
I decided to have an easy modern UI, definitely mobile friendly where the user could use it at the gym or anywhere else.
The user could use his thumb to swipe the carousals on the front page or the generated exercises.


###Design<hr>
![Alt Text](https://media.giphy.com/media/3o7btOG4nxbFguLMNW/giphy.gif)<br><br>


At the beginning, I started with placing the image that will be sitting on the back layer. Then, by using ***Photoshop***, I used the same image to cut the muscles to be on front layer. After that, I placed those new created images and placed them on top of the main image and changed their opacity to 0 and to 1 when the user hover or click on them.<br><br>
![Alt Text](https://media.giphy.com/media/3o7btODgQDo9ebGCiI/giphy.gif)<br>

##Further Work
I would like to add more complexity to the workouts generator, adding more options like "home workout", "free weights" and more.<br>
In addition, adding meals planner would be ideal.

##Tools

**"Pocket Fit"** was built with:<br>
- HTML5<br>
- SCSS <br>
- Ruby on Rails <br>
- Potsgres SQL<br>
- AngularJS<br>
- Tachyons CSS Framework<br>
- Gulp<br>
- Trello<br>
- Insomnia<br>
- [Slick.js] (https://Slick.js/) for the carousels<br>
- Adobe Photoshop<br>

##Credit
- Diets from [nhs.uk/] (www.nhs.uk/) 
- Exercises from [Bodybuilding.com] (https://www.bodybuilding.com)



