/// <reference types="Cypress" />

describe('GitHub Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display search results for user "Rafael C. Pereira"', () => {
    cy.get('._title_5o35q_14').should('have.text', 'Search for a user');
    cy.get('._title_1kib8_23').should('have.text', 'github-search');
    cy.get('._input_1kmnl_7').type('rcardosopereira');
    cy.get('._button_9k1wr_1').click();
    cy.get('._userInfo_7hzna_67 > :nth-child(1)').should(
      'have.text',
      'Name: Rafael C. Pereira'
    );
    cy.get('._userInfo_7hzna_67 > :nth-child(2)').should('have.text', 'Repositories: 39');
    cy.get(':nth-child(30) > p').should('have.text', 'Java, Selenium, Cucumber');
  });

  it('should display search results for user "Ops, something went wrong"', () => {
    cy.get('._input_1kmnl_7').type('qaz.wsx');
    cy.get('._button_9k1wr_1').click();
    cy.get('._errorMessage_7hzna_86').should('contain', 'Ops, something went wrong');
    cy.get('._button_9k1wr_1').click();
  });
});

describe('Visit GitHub Website', () => {
  beforeEach(() => {
    cy.visit('https://github.com/rcardosopereira');
  });

  it('should search repositories', () => {
    // Click on search button for repositories
    cy.get('.color-border-muted')
      .find('.container-xl')
      .find('.Layout')
      .find('.Layout-main')
      .find('.UnderlineNav')
      .find('.UnderlineNav-body')
      .find(
        '[data-hydro-click-hmac="3983e3823cc84bca912d260ceb2a188efd3b831624281803687889b77957c7ec"]'
      )
      .click();

    // Verify that search results for repositories are displayed
    cy.get(
      '[data-hydro-click-hmac="3983e3823cc84bca912d260ceb2a188efd3b831624281803687889b77957c7ec"]'
    ).should('exist');

    // Click on a specific repository
    cy.get(':nth-child(2) > .col-10 > .d-inline-block.mb-1 > .wb-break-all > a').click();
    cy.get(
      '#folder-row-4 > .react-directory-row-name-cell-large-screen > .react-directory-filename-column > .overflow-hidden > h3 > .react-directory-truncate > .Link--primary'
    ).click();

    // Verify the presence of text in a specific area
    cy.get('[data-testid="read-only-cursor-text-area"]')
      .click()
      .should('contain', 'lovelystay');

    // Click on a button
    cy.get('.Button-label').click();

    // Click on a search button
    cy.get('.header-search-button > .flex-1').click();

    // Type a search query
    cy.get('#query-builder-test').should('exist').clear().type('rafael').type('{enter}');

    // Click on a navigation item
    cy.get('[data-testid="nav-item-users"]').click();
  });
});
