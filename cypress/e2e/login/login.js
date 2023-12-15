import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
const LoginPage = require('../../e2e/Pages/loginPage')

Given('A user enters to the login Page', ()=>{
    cy.visit('https://www.automationexercise.com/')
})

When('A user enters the user {string}', (username)=>{
    cy.get('a[href="/login"]').click();
    LoginPage.typeUsername(username)     
})

And('A user enters the password {string}', (password)=>{
    LoginPage.typePassword(password)
})

And('A user clicks on the login button',()=>{
    LoginPage.clickBTNLogin()
})

Then('A user will be logged in',() =>{
    LoginPage.clickBTNLogout()
})

Then('A user will receive a invalid user', ()=>{
    cy.get('p[style="color: red;"]').should('have.text', 'Your email or password is incorrect!')
})