This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Farm Cart App 
 - Version 1.0 
 - Description goes here
 
### Current working functions 

Avaliable routes: 
### signup/login/farmerlogin
As we designed, usered are allowed to login in different roles. Farmer login allows users to add products. User login allow users to buy products. 

### add products
This should be the page for famrers to publish their products. 

### add items to shpping cart(in developing)
This should be the page for users to add items to their wishlist/shopping cart

Runs the app in the development mode.<br />
run `npm start`
Runs the app in the development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Current working functions 

Avaliable routes: 
### signup/login/farmerlogin
As we designed, usered are allowed to login in different roles. Farmer login allows users to add products. User login allow users to buy products. 

### add products
This should be the page for famrers to publish their products. 

<b style='color:red'> 6/14/2020 Jae  </b> </br>
if you type info about a product, it shows up on landing page.
very buggy right now. 
1) use lower characters only 
2) due to limited available images, add only "apple, pineapple, watermellon"
3) if you click "clear data" button, stored data in local storage is deleted.


### add items to shpping cart(in developing)
This should be the page for users to add items to their wishlist/shopping cart

## Shopping cart (In progress)
As for shopping cart, it plays an role in helping customers review food they are going to pay. It also dedicates to allow customers to add or delete food before making a payment. Click an "plus" button to add food. Click an "minus" button to delete food. It is a detrimental part since this app aims to build a bridge between sellers and customers.

## Database
We currently using mongodb database as our backend support. There are two models in our database, which are 
`users` (contains username and password) `prodcuts`(contains product name and description). We are working on database schema to build more further functions. 
