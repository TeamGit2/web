import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Usuario } from "src/app/models/usuario";
import {map} from 'rxjs/operators'
import { Respuesta } from "src/app/models/respuestas";


const httOption={
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
}


@Injectable({
    providedIn: 'root'
})

export class ApiauthService{

    url:string ='https://localhost:44366/api/login';    
     public get usuariodata(): Usuario{
          return (JSON.parse(localStorage.getItem('usuario') || '{}')) 
      }

    constructor(private _http: HttpClient){
        //  this.usuarioSubject=new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario') || '{}')) 
            
    }


    
    login(user_name: string, password: string): Observable<Respuesta>{
        return this._http.post<Respuesta>(this.url,{user_name,password}, httOption).pipe(
            map( res =>{
                if (res != null){                  
                    // const usuario : Usuario = res;

                    localStorage.setItem('usuario',JSON.stringify(res))                                        
                    // this.usuarioSubject.next(res); 
                }
                else{
                    return res;
                    
                }
                return res;

            })
        );

    }
    logOut(){
        localStorage.removeItem('usuario');
        // this.usuarioSubject.next(null!);
    }
}