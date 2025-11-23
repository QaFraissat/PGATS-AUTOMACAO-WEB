
import { faker } from '@faker-js/faker'
import { getRandomEmail } from '../../support/helpers';

/*export function preencherFormularioDePreCadastro ( ) {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
        
       
    cy.get('[data-qa="signup-name"]').type('QA Tester')
    cy.get('[data-qa="signup-email"]').type(`fraissat${getRandomEmail()}`)
        
    cy.contains('button', 'Signup').click()

}*/


class login {
    preencherFormularioDePreCadastro (nome, email) {
    //const firstName = faker.person.firstName()
    //const lastName = faker.person.lastName()
        
       
    cy.get('[data-qa="signup-name"]').type(nome)//('QA Tester')
    cy.get('[data-qa="signup-email"]').type(email)//(`fraissat${getRandomEmail()}`)
        
    cy.contains('button', 'Signup').click()
  }

  preencherFormularioDeLogin(user, pass) {

    cy.get('[data-qa="login-email"]').type(user)
    cy.get('[data-qa="login-password"]').type(pass)

    cy.get(`[data-qa="login-button"]`).click()
  }
}

export default new login ()


//('fraissat@gmail.com')
//('123456', {log: false})


