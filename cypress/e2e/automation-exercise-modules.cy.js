
/// <reference types="cypress" />

import userData from '../fixtures/example.json'
import { 
    getRandomNumber,
    getRandomEmail
} from '../support/helpers'

import { faker } from '@faker-js/faker';
import menu from '../modules/menu'
import login from '../modules/login'
import cadastro from '../modules/cadastro'
import contato from '../modules/contato'
import produto from '../modules/produto'
import carrinho from '../modules/carrinho';


describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('https://automationexercise.com/')
    
        
    });

    it('1 - Register User', () => {

        menu.navegarParaLogin()

        login.preencherFormularioDePreCadastro('QA Tester', `fraissat${getRandomEmail()}`)
        cadastro.preencherFormularioDeCadastroCompleto()

        //Assert
        cy.url().should('includes', 'account_created')
        cy.contains('b', 'Account Created')

    });

    it('2 - Login User with correct email and password', () => {

        menu.navegarParaLogin()

        login.preencherFormularioDeLogin(userData.user, userData.password)

        cy.get('i.fa-user').parent().should('contain', userData.name)
        cy.get('a[href="/logout"]').should('be.visible')
        
    });


    it('3 - Login User with incorrect email and password', () => {

        menu.navegarParaLogin()

        login.preencherFormularioDeLogin(userData.user, '888888')

        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')

    });


    it('4 - Logout User', () => {

        menu.navegarParaLogin()

        login.preencherFormularioDeLogin(userData.user, userData.password)
        menu.efetuarLogout()
        
        cy.get('a[href="/login"]').should('be.visible')

    });

    it('5 - Register User with existing email', () => {

        menu.navegarParaLogin()

        login.preencherFormularioDePreCadastro('QA Tester', 'fraissat@hotmail.com')

        //assert
        cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')

    });

    it('6 - Contact Us Form', () => {

        menu.acessarFormularioDeContato()
        contato.preencherFormularioDeContato ()


        //assert
        cy.get('.status').should('be.visible')
        cy.get('.status').should('contain', 'Success! Your details have been submitted successfully.')

    });

    it('8 - Verify All Products and product detail page', () => {

        menu.acessarProdutos()
        menu.acessarProdutoUm()

        //assert:
        // 1 - Nome do produto
        //pegue o elmento h2 que está dentro da classe product-information
       cy.get('.product-information h2').should('be.visible').and('contain', 'Blue Top')
       // 2 - Categoria
       cy.get('.product-information p').first().should('contain', 'Category')
       // 3 - Preço
       cy.get('.product-information span span').should('be.visible').and('contain', 'Rs.')
       // 4 - Disponibilidade
       cy.contains('p', 'Availability:').should('contain', 'In Stock')
       // 5 - Condição
       cy.contains('p', 'Condition').should('contain', 'New')
       // 6 - Marca
       cy.contains('p', 'Brand').should('contain', 'Polo')
    });

     it('9 - Search Product', () => {

        menu.acessarProdutos()
        //contato.preencherFormularioDeContato ()
        cy.get('.title').should('contain', 'All Products')
        produto.buscarProduto('Blue Top')
     
        //assert
        cy.contains('h2.title', 'Searched Products').should('be.visible')
        cy.get('.productinfo > p').should('contain', 'Blue Top')

    });

    it('10 - Verify Subscription in home page', () => {

        cy.get('a[href="/"]').should('be.visible')
        cy.scrollTo('bottom')

        cy.get('.single-widget > h2').should('be.visible').and('contain', 'Subscription')

        cadastro.preencherAssinaturaDeEmail('fraissat@gmail.com')

        cy.get('#success-subscribe').should('be.visible').and('contain', 'You have been successfully subscribed!')

    });

    it('15 - Contact Us Form', () => {

        menu.navegarParaLogin()
        login.preencherFormularioDePreCadastro('QA Tester', `fraissat${getRandomEmail()}`)
        cadastro.preencherFormularioDeCadastroCompleto()
        cy.contains('b', 'Account Created')

        cy.get('[data-qa="continue-button"]').click({ force: true })
        cy.contains('Logged in as', { timeout: 8000 }).should('be.visible')

        carrinho.adicionandoProdutosNoCarrinho()

        cy.get('a[href="/view_cart"]').should('be.visible')

        
        cy.contains('a', 'Proceed To Checkout').click()
        cy.scrollTo('bottom')
        cy.get('.form-control').type('comentário sobre a minha compra')
        cy.get('a[href="/payment"]').click()
        
        carrinho.finalizarCompra()

        //assert
        cy.get('[data-qa="order-placed"] > b').should('be.visible')


        menu.deletarConta()
        cy.contains('b', 'Account Deleted!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()

    }); 
    
});