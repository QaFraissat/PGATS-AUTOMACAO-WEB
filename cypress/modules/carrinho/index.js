class carrinho {
    adicionandoProdutosNoCarrinho(){
        cy.get('[data-product-id="1"]').first().scrollIntoView().click({ force: true })
        cy.get('[data-product-id="2"]').first().scrollIntoView().click({ force: true })
        cy.get('[data-product-id="3"]').first().scrollIntoView().click({ force: true })

        cy.get('u').click()

    }

    finalizarCompra(){
        cy.get('[data-qa="name-on-card"]').type('NATHALIA FRAISSAT MAMEDE')
        cy.get('[data-qa="card-number"]').type('4123 8888 2349 7777')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('12')
        cy.get('[data-qa="expiry-year"]').type('2026')
        cy.get('[data-qa="pay-button"]').click()
    }

}

export default new carrinho()