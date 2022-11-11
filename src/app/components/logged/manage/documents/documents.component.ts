import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  @ViewChild('BISSheet') BISSheet!: ElementRef;

  // TODO: get data from db
  accountData = {
    branchCode: "56898",
    counterCode: "01258",
    accountNumber: "1249787T413",
    keyBIS: "46",
    domiciliation: "LEIKA BANK MARSEILLE FINANCIAL CENTRE",
    accountIBAN: "FR452006789625985172T25516",
    accountBIC: "PSSTFRPPMAR",
    userName: "Thomas Gold",
    address: ["85 bd de Monteux", "13005 Marseille", "FRANCE"]
  }

  constructor() { }

  ngOnInit(): void {
  }

  public generatePDF(): void {

    html2canvas(this.BISSheet.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'px', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.setFontSize(11);
      PDF.addPage("a4", "p"); //just in case there's an cut in the page
      PDF.html(this.BISSheet.nativeElement.innerHTML)
      PDF.save('leikaBIS.pdf');
    });
  };

  

}
