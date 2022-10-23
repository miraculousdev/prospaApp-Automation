import {signupPage,createabusinessPage} from "../fixtures/selectors.js";

describe("Prospa login test", function () {

    beforeEach(function(){
        cy.visit('/')
    });
    let number = parseInt(Math.random()*10000000, 10);
    let phone_number = '0803' + number;
    let email = phone_number + '@yopmail.com';
    it("should be able to click on createabusiness", function () {
        cy.get(signupPage.loginBtn).click()
        cy.get(signupPage.signUpBtn).click()
        cy.wait(3000)
        cy.get(signupPage.firstNameField).type(signupPage.firstNameText)
        cy.get(signupPage.firstNameField).type(userID_Alpha())
            function userID_Alpha() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
  }

        cy.get(signupPage.lastNameField).type(signupPage.lastNameText)
        cy.get(signupPage.mobileNumberField).type(phone_number)
        cy.get(signupPage.emailField).type(email)
        cy.get(signupPage.howDidYouHearAboutProspaField).click()
        cy.get(signupPage.googleAdOption).click()
        cy.get(signupPage.nextBtn).click()
        cy.wait(3000)
        cy.get(signupPage.createPasswordField).type(signupPage.createPasswordText)
        cy.get(signupPage.confirmPasswordField).type(signupPage.confirmPasswordText)
        cy.get(signupPage.nextBtn).click()
        cy.get(signupPage.pinField1).type('1')
        cy.get(signupPage.pinField2).type('1')
        cy.get(signupPage.pinField3).type('2')
        cy.get(signupPage.pinField4).type('1')
        cy.get(signupPage.nextBtn).click()
        cy.get(signupPage.nextBtn).click()
        cy.get(createabusinessPage.imafreelanceridobusinessinmypersonalnameBtn).click()
        cy.get(createabusinessPage.nextBtn).click()
        cy.get(createabusinessPage.businessturnoverField).type('100k-5M{enter}')
        cy.get(createabusinessPage.nextBtn).click()
        cy.wait(3000)
        cy.get(createabusinessPage.addresslineField).type('No55harrisonsholaja{enter}')
        cy.get(createabusinessPage.cityField).type(createabusinessPage.cityText)
        cy.get(createabusinessPage.stateField).type('Lagos{enter}')
        cy.get(createabusinessPage.nextBtn).click()
        cy.get(createabusinessPage.wemabankBtn).click()
        cy.get(createabusinessPage.nextBtn).click()

       
        
    });
});
