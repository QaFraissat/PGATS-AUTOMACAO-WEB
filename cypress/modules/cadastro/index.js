import { faker } from '@faker-js/faker'

class Cadastro {
    preencherFormularioDeCadastroCompleto() {
    
        //preencherFormularioDePreCadastro()
        cy.get('input[type=radio]').check('Mrs')
        // outra maneira de fazer: cy.get('#id_gender2').check()
        //radio ou checkboxes -> usamos o check
        cy.get('input#password').type('12345', {log: false}) 
        //elementos do tipo select tb conhecidos como combobox que tem multiplas opcoes...
        // os3 proximos sao assim, data, usamos o comando select
        cy.get('select[data-qa=days]').select('27')
        //tirei as aspas de days pq náo tenho caracter especial
        cy.get('select[data-qa=months]').select('December')
        cy.get('select[data-qa=years]').select('1988')

       //radiobutton -> check
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        //address information
        cy.get('input#first_name').type('Nathalia')
        cy.get('input#last_name').type(faker.person.lastName())
        cy.get('input#company').type(`FRAISSAT ${faker.company.name()}`)
        cy.get('input#address1').type(faker.location.streetAddress())
        //cy.get('input#address2').type('')

        cy.get('select#country').select('India')
        // cy.get('[data-qa=country]').select('India') outra opcao feita por mim

        cy.get('input#state').type(faker.location.state())
        cy.get('input#city').type(faker.location.state())

        cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
        cy.get('[data-qa="mobile_number"]').type('888 999 888')

        //Act
        //apertando o botáo de criar conta
        cy.get('[data-qa="create-account"]').click()
        }

    preencherAssinaturaDeEmail(email) {
        cy.get('#susbscribe_email').type(email)
        cy.get('#subscribe').click()

    }    

}

export default new Cadastro