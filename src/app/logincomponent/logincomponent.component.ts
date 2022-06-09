import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  title = 'etatra';
  
  username= 'superadmin';
  password= 'superadmin';

public userVerify():void
{
  window.location.href = '/';
   alert("successful login");
  localStorage.setItem("isAdmin","true");
}
  constructor() { }

  ngOnInit(): void {
    
  }

}
