
<p align="center">
 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_2012_logo.svg/1200px-Expedia_2012_logo.svg.png" />

 </p>
 <p align="center">
  <img height="50px" src="https://miro.medium.com/max/7200/1*Jkb_tsMBOvL6wQ8bzldu8Q.png" />
  <img height="50px" src="https://cdn.iconscout.com/icon/free/png-256/mocha-1-1175012.png" /> 
  <img height="50px" src="https://brandslogos.com/wp-content/uploads/thumbs/cucumber-logo-vector.svg" />
  
 </p>
<h1 align="center">Expedia Hotel Journey</h1>

This is a task to Automate the [Expedia Hotel booking system](https://www.expedia.co.uk/Hotels) using Cypress and Cucumber with Mochawesome report, Please see below for the Test Case that are automated 


## **Test Scenario**: Stay Function

| Test Case Number | Test Case |
|--|--|
|TC001  | Verify that the stay screen contains elements such as Destination, departure Date, Arrival Date, Add Flight, Add Car, Travellers and Search button. |
|TC002|Verify if a user will be able to successfully search with a valid data|
|TC003  | Verify if a user will not be able to book a flight without location |
|TC004  |Verify if a user is able to filter deals  |

Note - These are one of the few to be automated
## Install

1.  clone the repo
2.  `npm install` or 	`yarn install`


## Run tests
**CLI** - Run CLI

 
```
npx cypress run
```
**Cypress UI** - Run on Cypress UI
 
```
yarn || npm test:chrome
```
## Technology used:

 - Cypress 
 - Cucumber
 - Mochawesome

## DEMO
[Live report - Schedule to run everyday ](https://pirasanthan-jesugeevegan.github.io/amt-cypress-Expedia/)
