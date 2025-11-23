import userData from '../../fixtures/example.json'

class contato {
    preencherFormularioDeContato () {
        cy.get('[data-qa="name"]').type(userData.name)
        cy.get('[data-qa="email"]').type(userData.email)

        cy.get('[data-qa="subject"]').type(userData.subject)
        cy.get('[data-qa="message"]').type(userData.message)

        //carrega a imagem
        cy.fixture('imagem-exemplo.png', { encoding: null }).as('file');
        //seleciona o arquivo
        cy.get('input[name="upload_file"]').selectFile('@file');

        cy.get('[data-qa="submit-button"]').click()
    }
}

export default new contato ()