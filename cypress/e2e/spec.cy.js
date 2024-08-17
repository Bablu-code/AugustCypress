import Productpage from "../pageobjects/ProtoProductpage"
import Homepage from "../pageobjects/Protohome"

describe('test Protocommers website', () => {


    let usercred

    let productpage = new Productpage
    let homepage = new Homepage

    before(()=>{
      cy.fixture('example').then((userdata)=>{
      usercred=userdata;
      })
   })

   beforeEach(()=>{
    cy.visit('/')
   })

   it('login page test', () => {
  
    homepage.EnterUsername(usercred.name)
    homepage.EnterUsermail(usercred.email)
    homepage.EnterUserPassword(usercred.password)
    homepage.Tickingcheckbox()
    homepage.SelectGender()
    cy.get('#inlineRadio2').check().should('be.checked')
    cy.get('[type="date"]').type('1997-05-11')
    homepage.Submittingform()
  
  })

  it('add the products to cart ',()=>{

    productpage.visitingProductPage()
    productpage.addingToCart(usercred.mob)
    productpage.ClickonAddtocart()
    productpage.calculatingproducttotal()
    productpage.Enteringcountry()


   
  })



  })






  

   

  
    

    
      
      
    
  
  
    



  
  