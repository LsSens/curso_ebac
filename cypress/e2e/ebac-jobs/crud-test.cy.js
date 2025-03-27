/// <reference types="cypress" />

describe('teste home ebac jobs', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('renderizar componentes', () => {
        cy.get('.sc-iAEyYk').should('exist')
    })

    it('adicionar contato', () => {
        cy.get('[type="text"]').type('Lucas Sousa Sens')
        cy.get('[type="email"]').type('lucassousasens@gmail.com')
        cy.get('[type="tel"]').type('(13) 98220-1751')
        cy.get('.adicionar').click()
    })

    it('editar contato', () => {
        cy.get(':last-child > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Lucas Sens')
        cy.get('[type="email"]').clear().type('lucassens@gmail.com')
        cy.get('[type="tel"]').clear().type('(13) 98220-0000')
        cy.get('.alterar').click()
    })

    it('apagar contato', () => {
        cy.get(':last-child > .sc-gueYoa > .delete').click()
    })
})