import { Injectable } from '@angular/core';
import printJS from 'print-js';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NanoPrinterService {


  constructor(public platform: Platform) { }

  /*
print(content: string) {

  if (this.platform.is('cordova')) {
    this.printer.isAvailable().then((res) => {
      this.printer.print(content).then((value) => {
      }).catch(err => {
      })
    }).catch((err) => {
    })
  } else {
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head>');
    mywindow.document.write('</head><body>');
    mywindow.document.write(content);
    //mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');
 
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*
 
    mywindow.print();
    mywindow.close();
  }
}*/

  printId(id: string) {
    printJS({ printable: id, type: 'html' })
  }

}