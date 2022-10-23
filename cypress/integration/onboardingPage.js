import {onboardingPage} from "../../cypress/fixtures/selectors.js";

describe("Prospa login test", function () {

    beforeEach(function(){
        cy.visit('/')
    });

    it("should be able to click on the loginBtn", function () {
            cy.get(onboardingPage.loginBtn).click()
    });
    it("should not be able to login with empty field", function () { 
        cy.get(onboardingPage.loginBtn).click() 
        cy.get(onboardingPage.emailField).click()
        cy.get(onboardingPage.passwordField).click()
        cy.get(onboardingPage.signInBtn).click()
    });
    it("should not be able to login with invalid email and password", function () {  
            cy.get(onboardingPage.loginBtn).click()
            cy.get(onboardingPage.emailField).click()
            cy.get(onboardingPage.emailField).type(onboardingPage.invalidEmailText)
            cy.get(onboardingPage.passwordField).click()
            cy.get(onboardingPage.passwordField).type(onboardingPage.invalidPasswordText)
            cy.get(onboardingPage.signInBtn).click()   
        });
        it("should be able to login with valid email and password", function () { 
            cy.get(onboardingPage.loginBtn).click() 
            cy.get(onboardingPage.emailField).click()
            cy.get(onboardingPage.emailField).type(onboardingPage.validEmailText)
            cy.get(onboardingPage.passwordField).click()
            cy.get(onboardingPage.passwordField).type(onboardingPage.validPasswordText)
            cy.get(onboardingPage.signInBtn).click()
            
        });

         //it("should be able to login with continue with google", function () { 
             //cy.get(onboardingPage.loginBtn).click
             //cy.get(onboardingPage.continueWithGoogle).click
        });
        


        






    
