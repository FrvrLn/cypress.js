
describe('Тестирование формы логина', () => {
    beforeEach(() => {
      cy.visit('https://login.qa.studio/')
    })

    it('Позитивный кейс авторизации', function () {
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
       })

    it('Восстановление пароля', function () {
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('Arsen@qa.ru');
       cy.get('#restoreEmailButton').click();
       cy.get('#messageHeader').should('have.text', 'Успешно отправили пароль на e-mail');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
       })

    it('Тест верный логин и неверный пароль', function () {
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio2');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
       }) 
    
    it('Тест неверный логин и верный пароль', function () {
       cy.get('#mail').type('german@dolnikovvv.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
       }) 

    it('Тест валидации поля логин', function () {
       cy.get('#mail').type('germandolnikovvv.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('have.text', 'Нужно исправить проблему валидации');
       }) 

    it('Позитивный кейс авторизации', function () {
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
       })
})