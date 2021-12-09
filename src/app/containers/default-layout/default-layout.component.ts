import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import {MyserviceService} from '../../myservice.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  email:any;

constructor(private servicio:MyserviceService, private router:Router){}

  logout()
  {
    this.email = localStorage.getItem('email');
    this.servicio.deleteToken(this.email).subscribe(
      (response)=>{
        console.log(response,"Msj que responde...");
        if (response) {
          this.router.navigate(['/login']);
        }
      },
      error=>{
        console.log(error,"un Error");
      }
    )
    //this.servicio.deleteToken();
    //window.location.href = window.location.href;
    //this.router.navigate(['/login']);
  }
}
