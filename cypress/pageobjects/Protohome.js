class Homepage{

    EnterUsername(user){
        cy.get('.form-group input[name="name"]').type(user)
    }
    EnterUsermail(email){
        cy.get('.form-group input[name="email"]').type(email)
    }
    EnterUserPassword(password){
      cy.get('#exampleInputPassword1').type(password)
    }
    SelectGender(){

        cy.get('select').select('Male').should('have.value','Male')

    }
    Tickingcheckbox(){

        cy.get('#exampleCheck1').check()
    }
    Submittingform(){
        cy.get('[type="submit"]').click().should('be.visible')
    }




}
export default Homepage