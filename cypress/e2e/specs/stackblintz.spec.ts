import StackBlitz from "../../pageobjects/StackBlitz.page"
import MainPage from "../../pageobjects/MainPage.page"

describe('stackblintz test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

  it('Should check the certificate storage', () => {
    StackBlitz.clickRunBtn();
    StackBlitz.clickAddBtn();
    StackBlitz.fillDropbox1();
    StackBlitz.subjectCN.should('include.text','Володимир Борисович (Тест)');
    StackBlitz.subjectCN.should('be.visible');
    StackBlitz.issuerCN.should('include.text','UA-43174711-2019');
    StackBlitz.issuerCN.should('be.visible');
    StackBlitz.validFrom.should('include.text','2019-11-20 22:00:00 UTC');
    StackBlitz.validFrom.should('be.visible');
    StackBlitz.validTill.should('include.text','2021-11-20 22:00:00 UTC');
    StackBlitz.validTill.should('be.visible');
    cy.url().should('include','/js-55fbfg.stackblitz.io');
  })

  it('Should check add option of certificate storage', () => {
    StackBlitz.clickRunBtn();
    StackBlitz.clickAddBtn();
    StackBlitz.clickCancelBtn();
    StackBlitz.addBtn.should('be.visible');
    StackBlitz.clickAddBtn();
    StackBlitz.fillDropbox1();
    StackBlitz.clickAddBtn();
    StackBlitz.fillDropbox2();
    cy.url().should('include','/js-55fbfg.stackblitz.io');
  })


})
