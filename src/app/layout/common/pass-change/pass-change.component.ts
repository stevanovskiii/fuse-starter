import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.component.html',
  styleUrls: ['./pass-change.component.scss']
})
export class PassChangeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserComponent>,
              public _authService: AuthService) {}

  ngOnInit(): void {
    this.oldPassOriginal=this._authService.getPassUser()
  }

  Close(){
    this.dialogRef.close();
  }

  oldPassOriginal: string
  oldPassInput: string
  newPass: string
  newPassRepeat: string
  getOldPass(val){
    this.oldPassInput=val
  }
  getNewPass(val){
    this.newPass=val
  }
  getNewPassRepeat(val){
    this.newPassRepeat=val
  }


  SavePass(){
    console.log(this.newPass)
    console.log(this.oldPassOriginal)
    if(this.newPass==this.newPassRepeat && this.oldPassOriginal==this.oldPassInput && this.newPass!=this.oldPassOriginal){
      const formData='Id=5092&CompanyId=4&FirstName=praksa&LastName=praksa&GenderId=0&Gender=&DepartmentId=0&Department=&City=&Address=&TaxId=&Phone=&Role=User&RoleId=4&Email=praksa%40gmail.com&Password='+this.newPass+'&EmailNotification=false&LanguageId=1&LanguageIdFill=0&Language=Macedonian&LanguagePrefix=MK&Company%5BId%5D=4&Company%5BName%5D=TEST+Company+-+2&Company%5BOwner%5D=&Company%5BEmail%5D=&Company%5BPhone%5D=&Company%5BCountry%5D=&Company%5BCity%5D=&Company%5BPostCode%5D=&Company%5BAddress%5D=&Company%5BTaxId%5D=&Company%5BMbs%5D=&Company%5BBank%5D=&Company%5BBankAccount%5D=&Company%5BPartnerCode%5D=&Company%5BLanguageId%5D=0&Company%5BStoragePath%5D=https%3A%2F%2Festitask.com%2F&FullName=praksa+praksa&Enabled=false'
    fetch('https://estitask.com/api/api/user/ResetPassword', {      
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: formData
  })
    this.oldPassOriginal=this.newPass;//Ова не работи баш
    this._authService.setNewPass(this.newPass)
    console.log(this.oldPassOriginal+'ova e starata koja sega ja povervam treba da bide ko novata')
    this.dialogRef.close();
    }
    else if(this.newPass!=this.newPassRepeat){
      let a = window.document.getElementById('NovNeIst1')!;
      a.style.display='block';
      let b = window.document.getElementById('NovNeIst2')!;
      b.style.display='block';
      console.log('NovNeIst')
    }
    else if(this.oldPassOriginal==this.newPass){
      let a = window.document.getElementById('StarEIst')!;
      a.style.display='block';
      console.log('StarEIST')
    }
    else if(this.oldPassOriginal!=this.oldPassInput){
      let a = window.document.getElementById('StarNePotvrden')!;
      a.style.display='block';
      console.log('Stariot ne e potvrden')
    }
  }
}

