
class StackBlitz {
    get runBtn(){
        return cy.xpath("//span[text()='Run this project']") 
    }

    get addBtn(){
     return cy.xpath("//button[text()='Добавить']") 
    }

    get cancelBtn(){
     return cy.xpath("//button[text()='Отменить']") 
    }

    get dropboxCertificate(){
     return cy.get("dropbox[class='dropbox ng-isolate-scope']")
    }

    get subjectCN(){
     return cy.xpath("//td[text()='Володимир Борисович (Тест)']")
    }

    get issuerCN(){
     return cy.xpath("//td[text()='UA-43174711-2019']")
    }

    get validFrom(){
     return cy.xpath("//td[text()='2019-11-20 22:00:00 UTC']")
    }

    get validTill(){
     return cy.xpath("//td[text()='2021-11-20 22:00:00 UTC']")
    }

    clickRunBtn(){
        this.runBtn.click();
    }

    clickAddBtn(){
        this.addBtn.click();
    }

    clickCancelBtn(){
        this.cancelBtn.click();
    }

    fillDropbox1(){
        this.dropboxCertificate.selectFile("Certificate1.cer",{action: 'drag-drop'});
    }

    fillDropbox2(){
        this.dropboxCertificate.selectFile("Certificate2.cer",{action: 'drag-drop'});
    }

}
export default new StackBlitz();
