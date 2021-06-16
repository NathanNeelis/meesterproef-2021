# Meesterproef 2021

### View the app
:earth_americas:  [live website](https://hipper-pam.herokuapp.com/) 

#### Description
Hipper is a device that is based on sensor technology (IOT device) that helps the user with the rehabilitation process. The device, called a PAM device, registers movement and sends this data to a server. This data is visualized in the Hipper dashboard. In this project I will do research to find a better way to visualize this data and how this can be communicated to the target audience. I will also be looking for a solution on how to motivate this target audience to start moving more often without getting demotivated.

<img width="600" alt="Ipad_hipper_home" src="https://user-images.githubusercontent.com/55492381/122191910-70a04c80-ce93-11eb-9c95-71fe40a41eae.png">


## Table of contents
[Description](https://github.com/NathanNeelis/meesterproef-2021#description)  
[Design Challange](https://github.com/NathanNeelis/meesterproef-2021#design-challenge)  
[Concept](https://github.com/NathanNeelis/meesterproef-2021#concept)  
[Getting started](https://github.com/NathanNeelis/meesterproef-2021#getting-started)  
[Packages](https://github.com/NathanNeelis/meesterproef-2021#packages)  
[Features](https://github.com/NathanNeelis/meesterproef-2021#features)  
[Data & API](https://github.com/NathanNeelis/meesterproef-2021#data--api)  
[Code structure](https://github.com/NathanNeelis/meesterproef-2021#code-structure)  
[Planning](https://github.com/NathanNeelis/meesterproef-2021#planning)  
[License](https://github.com/NathanNeelis/meesterproef-2021#license)  
[Resources](https://github.com/NathanNeelis/meesterproef-2021#resources)  
 

## Design Challenge
Hipper supports rehabilitation patient by measuring their movement and visualizing this data in a dashboard. Research shows that most users have trouble interpreting the information about their rehabilitation progress. I will be designing a new dashboard for Hipper that visualizes this information in a more user friendly way. Apart from the data visualization I am going to research how I can motivate the patient to move more often and add this solution to the new application.

## Concept
Hipper 2.0 is an application that can be installed on most devices and accessed on all devices. In this application you can track your activities to reach your goals. These activities and goals can later be accessed in an overview. Based on your scores you can adjust your goals with your therapist and plan new activities for the coming week.   
    
![all-screens](https://user-images.githubusercontent.com/55492381/122193207-9a0da800-ce94-11eb-8afb-794f513770a2.png)  
  
## Getting started

### Cloning the repo
1. Create your git repo  
    ```bash
    mkdir foldername  
    cd "/foldername"  
    git init  
    ```  

2. Clone this repo  
    ```bash
    git clone https://github.com/NathanNeelis/meesterproef-2021.git
    ```   

3. install packages  
    ```bash
    npm install
    ```  

4. Create a .env file with database and sessions variables like this: 
    ```bash
    DB_HOST=’host url’
    DB_PORT=’port van database’
    DB_NAME=’database naam’
    SESSION_SECRET=’uniek wachtwoord als session secret’
    ```  

5. Start the app on localhost:2000
    ```bash
    npm start
    ```  

## Packages
[bcrypt](https://www.npmjs.com/package/bcrypt)  
[body-parser](https://www.npmjs.com/package/body-parser)  
[compression](https://www.npmjs.com/package/compression)  
[dotenv](https://www.npmjs.com/package/dotenv)  
[ejs](https://www.npmjs.com/package/ejs)  
[express](https://www.npmjs.com/package/express)  
[express-sessions](https://www.npmjs.com/package/express-session)  
[mongoose](https://www.npmjs.com/package/mongoose)  
[node-fetch](https://www.npmjs.com/package/node-fetch)  
[slug](https://www.npmjs.com/package/slug)  

## Features
### Login & register
To secure the users data he will need to login. If the user doenst have an account yet, he can register himself.  
  
<img width="500" alt="Hipper_inloggen" src="https://user-images.githubusercontent.com/55492381/122055392-dedc0500-cde8-11eb-9364-fc1693911733.gif">  
  

### Daily- and weekly goals
Through movement with the PAM device, you will increase your score in your daily and weekly goals. You can do activities that have been suggested to you by your therapist. The goal reaches a 100% if your score is higher than the average of all your daily scores + 1 or higher than your manually set goal. Don’t be afraid to reach a higher score then a 100% because it will still count in your daily score!
  
<img width="500" alt="doelen" src="https://user-images.githubusercontent.com/55492381/122055387-de436e80-cde8-11eb-9d5a-3376f8bacac1.gif">  
  

### Start an activity
Are you going to do an activity? Start this activity in the renewed hipper app. By doing this the app registers out of which activities your movement that day exists. This might come in handy when you have an appointment with your therapist, and you can show which activities you have done instead of relying on your memory. Another benefit is that you will see which score your activities gets.
  
<img width="500" alt="activiteit starten" src="https://user-images.githubusercontent.com/55492381/122055381-db487e00-cde8-11eb-9b60-7f8d74e7a9b0.gif">   
  
### Plan activities
On your appointment with your therapist, you can plan activities for the coming week together. This way you can’t forget which activities you planned for today and motivates you in completing them.
  
<img width="500" alt="activiteiten plannen" src="https://user-images.githubusercontent.com/55492381/122055409-e4394f80-cde8-11eb-838b-a74e97bfab46.gif"> 
  

### Set your goal manually
Having trouble with completing your daily and weekly goals? Or are they to easy? You can adjust them together with your therapist to a more realistic goal that helps you with your rehabilitation process. 
  
<img width="500" alt="doel instellen" src="https://user-images.githubusercontent.com/55492381/122056312-c28c9800-cde9-11eb-889f-96a50ba4689d.png">  
  
### Contact the Hipper team
Having trouble with the application, your account or the PAM device? You can contact the Hipper team through this contact form and receive help as quickly as possible. 
  
<img width="500" alt="contact opnemen" src="https://user-images.githubusercontent.com/55492381/122055386-ddaad800-cde8-11eb-91c0-293454d71dcd.gif">    
  
### Install the app & offline
On some devices you can install this app. Installing this application makes for easy access because you won’t have to open your browser every time. You can also access pages offline after you have visited them. They will contain the latest data from when you did have an internet connection. This makes visiting the Therapist easier because you can take your tablet with you and show your rehabilitation progression while not having access to their Wi-Fi.
  
 <img width="500" alt="installeren" src="https://user-images.githubusercontent.com/55492381/122055394-df749b80-cde8-11eb-9601-38fde7af08b0.gif">  
  

## Data & API
By wearing the hipper device, called the PAM device, the data gets saved on a server. This data is accessible through an api.

### PAM daily values
In the daily values the data is summarized for each day. This data includes how many minutes the user has moved and with which intensity. In this example is shown that the user has done 59 minutes of light activities and 8 minutes of medium activities. The total PAM score he gets for his movement is 8.50.

### Pam epoch values (raw data)
This is the raw data from the device. The devices updates every 15 minutes with new data about the movement of this time period. The result is a string with 192 characters which each 2 characters represents 15 minutes in a day. The score of the 2 characters are the minutes moved in that timeframe.

### Diagram
On the left you can see an example of the daily data and on the right an example of the raw data for one specific day.

![Dataoverzicht](https://user-images.githubusercontent.com/55492381/118803983-5f6c1c00-b8a4-11eb-9f0d-2c60b0449d88.jpg)


## Code Structure
### Progressive web app
This is a progressive web app with an installed service worker and a manifest. This way the app can be installed on some devices and are visited pages offline available. 
The service worker has been set up to always open the page with loading the content from the Node server and save its content in the cache. Only when the user is offline it will fall back on the cached pages.

### Node applicatie
This application has been made with a Node.js backend. Through Node all dynamic data is set on their rightful places. This can be in a HTML page or even in the database. Through Node I also compress all pages for faster loading speed.

### EJS Templating
I choose to use EJS templating to render the HTML pages. Using EJS I can easily add dynamic data to my pages.

### MongoDB database
For the database I choose to use the nosql database MongoDB, because I have the most experience using this database and prefer this database at the moment over the Firebase database, which was my other option. In this database I registered every user and their completed activities as well as their planned activities. To give my MongoDB skills an extra boost I dove into Mongoose to write less duplicate code and add another level of security by for example hashing the passwords with b-crypt.

### Sessions
Via a sessions cookie the logged in user gets saved. This way the application knows that a user is logged in so the user doesn’t have to login again at every page refresh.

### Actor diagram
You can see which routes use which actor in the actor diagram below. This gives an impression on how my code is structured.
<details>
<summary>Actor diagram</summary>

[Link to Actor diagram](https://user-images.githubusercontent.com/55492381/122047144-13978e80-cde0-11eb-898b-2d1793e2f6b4.jpg)  
![ActorDiagram](https://user-images.githubusercontent.com/55492381/122047144-13978e80-cde0-11eb-898b-2d1793e2f6b4.jpg)  
</details>

### Interaction diagram
In the interaction diagram you can see the interaction between the features, pages and the database.
<details>
<summary>Interaction diagram</summary>

[link to Interaction diagram](https://user-images.githubusercontent.com/55492381/122047160-172b1580-cde0-11eb-86d0-6353dbc7cc95.jpg) 
![interaction-diagram](https://user-images.githubusercontent.com/55492381/122047160-172b1580-cde0-11eb-86d0-6353dbc7cc95.jpg)  
</details>


### Dataflow diagram
When the data is saved and when it is required is drawn in the dataflow diagram below.
<details>
<summary>Dataflow diagram</summary>
 
[Link to dataflow](https://user-images.githubusercontent.com/55492381/122047150-14c8bb80-cde0-11eb-9406-d2fdc52d0d89.jpg) 
![dataflow](https://user-images.githubusercontent.com/55492381/122047150-14c8bb80-cde0-11eb-9406-d2fdc52d0d89.jpg)  
</details>

## Planning

* [x] Create Database
* [x] Save users in database  
* [x] save activities in database each day  
* [x] save the pam data in the database  
* [x] Make a login system   
* [x] Start activity  
* [x] Start an activity for a specific time    
* [x] Create an activity for this timeslot in the database  
* [x] Validate Activity  
* [x] Validate this activity with the PAM raw data  
* [x] Calculate the PAM score during this activity from raw data  
* [x] Add PAM score to the completed activity in the app  
* [x] Plan activities form
* [x] Planned activities to database
* [x] Planned activities from database in overview
* [x] Animation dag en week doel
* [x] Add CTA to activity feedback pages
* [x] Responsive
* [x] Remove menu while doing an acitivty
* [x] Add close button while doing an acitivty

* [ ] Manuall set daily goal
* [ ] Overview goals
* [ ] Overview activities
* [ ] Feedback activity: how did it go?
* [ ] Add todays planned activities to homepage
* [ ] Add previously done activities manually
* [ ] Add motivators like 10/7 score = party party  



## License
[MIT](https://github.com/NathanNeelis/meesterproef-2021/blob/master/LICENSE)  


## Resources
[fetch api authentication](https://stackoverflow.com/questions/43842793/basic-authentication-with-fetch)  
[manifest generator](https://www.simicart.com/manifest-generator.html/)  
[timestamp js](https://flaviocopes.com/how-to-get-timestamp-javascript/)  
[stopwatch](https://codepen.io/cathydutton/pen/GBcvo)  
[Date object](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript)  
[Date object mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)  
[MongoDB Update one](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/)  
[Date and time in Node](https://usefulangle.com/post/187/nodejs-get-date-time)  
[MongoDB push](https://docs.mongodb.com/manual/reference/operator/update/push/)  
[sum values in object](https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object)  
[filter object](https://masteringjs.io/tutorials/fundamentals/filter-object)  
[adding 0 in clock if 1 digit](https://stackoverflow.com/questions/12278272/adding-0-if-clock-have-one-digit)  
[split long string](https://stackoverflow.com/questions/6259515/how-can-i-split-a-string-into-segments-of-n-characters)  
[date notation](https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript)  
[Object from 2 arrays](https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays)  
[Array of time strings](https://stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript)  
[Mongoose password auth](https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1)  
[Mongoose object error](https://stackoverflow.com/questions/32633561/cant-access-object-property-of-a-mongoose-response)  
[Mongoose docs](https://mongoosejs.com/docs/guide.html)  
[how to mongoose](https://zellwk.com/blog/local-mongodb/#:~:text=To%20connect%20to%20your%20local,databases%20in%20your%20local%20MongoDB.)  
[Janno Mongoose example](https://github.com/TuriGuilano/be_example_repo/blob/main/app.js)  
[date format ddmmyyyy](https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i)  
[date object](https://www.w3resource.com/javascript/object-property-method/date-getDate.php)  
[update variable](https://css-tricks.com/updating-a-css-variable-with-javascript/)  
[conic gradient 1](https://www.youtube.com/watch?v=baorOUVPF-I)  
[conic gradient 2](https://www.youtube.com/watch?v=_SubPYPtJO4)  
[conic gradient 3](https://css-tricks.com/using-conic-gradients-css-variables-create-doughnut-chart-output-range-input/)  
[animate conic gradient](https://css-tricks.com/the-state-of-changing-gradients-with-css-transitions-and-animations/)  
[calculate total with reduce](https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers)
[CSS register properties @supports](https://web.dev/at-property/)  
[css register properties](https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty)  
[caniuse register propreties](https://caniuse.com/?search=CSS.registerProperty)  
