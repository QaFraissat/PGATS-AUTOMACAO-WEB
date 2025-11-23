class produto {
    buscarProduto(produto) {
        cy.get('#search_product').type(produto)
        cy.get('#submit_search').click()
    }
}

export default new produto