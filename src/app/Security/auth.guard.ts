import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { ApiauthService } from "src/services/apiauth.services";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private route: Router,
                private authserv: ApiauthService){

    }
    canActivate(route:ActivatedRouteSnapshot ){
        // const usuario=this.authserv.usuariodata;
        const usuario=localStorage.getItem('usuario')

        if(usuario != null){
            return true
        }

        this.route.navigate(['/login'])
        return false;
    }
        
    }
