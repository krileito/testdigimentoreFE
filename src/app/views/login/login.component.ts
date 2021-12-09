import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../myservice.service'
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 
  public credential = { usuario: '',password :'' };

  constructor(private myfristco:MyserviceService,private router:Router){}

  ngOnInit() {
  }
  
  getlogin(){
    this.myfristco .getLogin(this.credential.usuario,this.credential.password)
      .pipe(first())
      .subscribe(
          data => {
                const redirect = this.myfristco.redirectUrl ? this.myfristco.redirectUrl : '/dashboard';
                this.router.navigate([redirect]);
              
          }
          ,
          error => {
             alert("User name or password is incorrect aqui");
            // alert(error.error)
          });
  }



}
