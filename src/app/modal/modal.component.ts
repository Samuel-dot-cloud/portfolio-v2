import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface DialogData {
  name: string | any;
  email: string | any;
  phone: string | any;
  paragraph: string | any;

}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  selected = 'option2';

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  mailText:string = "";

  mailMe(){
    const allInfo = `My name is ${this.data.name}.\n My email is ${this.data.email}.\n My phone is ${this.data.phone}.\n My selected service is ${this.selected}.\n My message is ${this.data.paragraph}.\n`;
    this.mailText = `mailto:samuelwahome.k5@gmail.com ?subject=Contact Sam The Developer&body=${allInfo}`
    window.location.href = this.mailText;
    this.onNoClick();
  }


  ngOnInit(): void {
  }

}
