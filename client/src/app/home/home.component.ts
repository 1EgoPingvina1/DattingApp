import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginPage = false;
  registerMode = false;
  users:any;

  constructor(private accountService:AccountService){}
  ngOnInit(): void {
  }

  loginToggle(){
    this.loginPage = !this.loginPage;
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }



  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }

}
