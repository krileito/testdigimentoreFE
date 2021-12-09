import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { MyserviceService } from './myservice.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate  {
 
  constructor(private dataService: MyserviceService,private router: Router  ) {}
 
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    const routeurl: string = state.url;
    console.log("la routerurl",routeurl);
    
    return this.isLogin(routeurl);
  }
  isLogin(routeurl: string) {
      console.log("lo q sale ",this.dataService.isLoggedIn());
      
    if (this.dataService.isLoggedIn()) {
      return true;
    }
    this.dataService.redirectUrl = routeurl;
    this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
  }
}