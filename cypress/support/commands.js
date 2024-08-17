// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('AddingProductToCart', (prod) => {

    cy.get('app-card-list app-card').each(($phones)=>{

      if($phones.text().includes(prod)){
        cy.wrap($phones).find('button').click()
      }

    })
})

Cypress.Commands.add('priceCalculationAndAsserting', () => {

   let sum=0;
    cy.get('table tr td:nth-child(4) strong').each(($price)=>{
      const price = $price.text();
      const splitted = price.split(" ");
      cy.log(splitted);
      const actprice = splitted[1].trim();
      sum=Number(sum)+Number(actprice);
     }).then(()=>{
      cy.log(sum)
    })

    cy.get('table tr td h3 strong').then((totalAmount)=>{
      const totalTxt=totalAmount.text()
      const splitted=totalTxt.split(" ")
      const actualtotal = splitted[1].trim();
      expect(Number(actualtotal)).to.equal(sum)
    })
  


 })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })