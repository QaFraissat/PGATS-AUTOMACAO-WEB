//export function navegarParaLogin() {
//    cy.get('a[href="/login"]').click()
//}

class Menu {
navegarParaLogin() {
 cy.get('a[href="/login"]').click()
  }

  efetuarLogout () {
    cy.get('a[href="/logout"]').should('be.visible').click()
  }

  acessarFormularioDeContato () {
    cy.get('a[href="/contact_us"]').should('be.visible').click()
  }

  acessarProdutos(){
    cy.get('a[href="/products"]').should('be.visible').click()
  }

  acessarProdutoUm(){
    cy.get('a[href="/product_details/1"]').should('be.visible').click()
  }

  deletarConta(){
    cy.get('a[href="/delete_account"]').should('be.visible').click()
  }

}


export default new Menu()