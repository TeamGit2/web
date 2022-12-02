import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiauthService } from "src/services/apiauth.services";


@Component({ templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit{
    public user_name: string
    public password: string
    constructor(public apiauth:ApiauthService, private router: Router){
        if(this.apiauth.usuariodata){
            this.router.navigate(['/articulo'])
        }

    }
    ngOnInit() {
        
    }
    login(){
        this.apiauth.login(this.user_name,this.password).subscribe(res=>{
            if(res !=null){
                // console.log(localStorage.getItem('usuario'))
                this.router.navigate(['/articulo'])
            }
        })
    }
}