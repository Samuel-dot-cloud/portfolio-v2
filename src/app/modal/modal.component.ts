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

  processForm() {
    const allInfo = `My name is ${this.data.name}. My email is ${this.data.email}. My phone is ${this.data.phone}. My selected service is ${this.selected}. My message is ${this.data.paragraph}`;
    alert(allInfo); 
    this.onNoClick();
  }


  ngOnInit(): void {
  }

}
