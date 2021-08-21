import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.scss']
})
export class PassChangeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserComponent>) { }

  ngOnInit(): void {
  }

  Close(){
    this.dialogRef.close();
  }

  SavePass(){
    this.dialogRef.close();
  }


}
