class Productpage{

visitingProductPage(){
    cy.visit('/shop')
}
addingToCart(fixtureaddtocartData){

    fixtureaddtocartData.forEach((phone) => {
        cy.AddingProductToCart(phone)
    });  
}

ClickonAddtocart(){
    cy.get('[class="nav-link btn btn-primary"]').should('be.visible').click()

}
calculatingproducttotal(){
    cy.priceCalculationAndAsserting()
}
Enteringcountry(){

    cy.get('.btn.btn-success').should('be.visible').click()
    cy.get('#country').type('India{enter}')
    cy.wait(10000)
    cy.get('.suggestions ul li a').each(($country)=>{
        if($country.text().includes('India')){
          cy.wrap($country).click({force:true})
        }
    })
}

placeorderandchecksuccesmessage(){

    cy.get('.checkbox.checkbox-primary input').click({force:true})
    cy.get('[value="Purchase"]').click()
    cy.get('a.close').should('be.visible')

}




}

export default Productpage