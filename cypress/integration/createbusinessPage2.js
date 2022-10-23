import {signupPage,createabusinessPage2} from "../fixtures/selectors.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

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
        //cy.get(signupPage.nextBtn).click()
        cy.get(createabusinessPage2.mybusinessisnotyetregisterediwouldliketoregisterBtn).click()
        cy.get(createabusinessPage2.next_Btn).click()
        cy.get(createabusinessPage2.proprietorinfoBtn).click()
        cy.get(createabusinessPage2.firstNameField).type(createabusinessPage2.firstNameText)
        cy.get(createabusinessPage2.middlenameField).type(createabusinessPage2.middlenameText)
        cy.get(createabusinessPage2.surnameField).type(createabusinessPage2.surnameText)
        cy.get(createabusinessPage2.femaleField).click()
        cy.get(createabusinessPage2.nationalityField).type('Nigeria{enter}')
        cy.get(createabusinessPage2.dateofbirthField).type('18/3/1997{enter}')
        cy.get(createabusinessPage2.nextBtn).click()
        cy.get(createabusinessPage2.idtypeField).type('Drivers License{enter}')
        cy.get(createabusinessPage2.idcardnumberField).type(createabusinessPage2.idcardnumberText)

        const p = 'Picture.png'
        cy.get('.FileUpload_button__pxzsM').attachFile(p).trigger('input')
      

        //cy.get('#file-submit').click()
        cy.get(createabusinessPage2.occupationField).type(createabusinessPage2.occupationText)
        cy.get(createabusinessPage2.residentaladdressField).type(createabusinessPage2.residentaladdressText)
        cy.get(createabusinessPage2.city_Field).type(createabusinessPage2.city_Text)
        cy.get(createabusinessPage2.state_Field).type(createabusinessPage2.state_Text)
        cy.get(createabusinessPage2.email_Field).type(createabusinessPage2.email_Text)
        cy.get(createabusinessPage2.phoneNumberField).type(createabusinessPage2.phoneNumberText)



    });
});