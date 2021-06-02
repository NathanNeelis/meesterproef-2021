# Meesterproef 2021

### View the app
:earth_americas:  [live website](https://hipper-pam.herokuapp.com/) 

#### Description
Hipper helpt gebruikers met hun revalidatie proces. Het is een device die op basis van sensor technologie (een IOT device) de beweging registreert van de gebruiker en deze data naar een server stuurt. Deze data is inzichtelijk via een dashboard. Dit project gaat over het visualiseren van deze data op dit dashboard. In dit project ga ik onderzoeken wat voor data er beschikbaar is en wat hiervan van belang is voor de doelgroep. Ook ga ik uitzoeken hoe Hipper de gebruiker kan motiveren te gaan bewegen zonder het risico te lopen dat ze gedemotiveerd worden. - translate to English  

-- image of application


## Table of contents

## Description

## Assignment

## Concept

## Gettign started

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

4. Start the app on localhost:8080 
    ```bash
    npm start
    ```  

## Packages

## Features

## Data & API

## Planning

* [x] Create Database
* [x] Save users in database  
* [ ] save activities in database each day  
* [ ] save the pam data in the database  
* [x] Make a login system   
* [ ] Start activity  
* [ ] Start an activity for a specific time    
* [ ] Create an activity for this timeslot in the database  
* [ ] Validate Activity  
* [ ] Validate this activity with the PAM raw data  
* [ ] Calculate the PAM score during this activity from raw data  
* [ ] Add PAM score to the completed activity in the app  
* [ ] Weekly / daily goal  
* [ ] which week is not now?  
* [ ] What is the avarage PAM score of last week?  
* [ ] Base the new daily / weekly goals on last weeks data?  
* [ ] Or save the PAM score with the user in the database and when the user completes the daily goal seven times, the daily goal gets upgraded by 1?  


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


