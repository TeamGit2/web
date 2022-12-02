import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiauthService } from "src/services/apiauth.services";

@Injectable()
export class InterceptorToken implements HttpInterceptor{
    constructor(private apiAuth:ApiauthService){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        
        // const usuario=this.apiAuth.usuariodata;
        const usuario=localStorage.getItem('usuario')
        
        if(usuario !=null){
            const token=usuario.replace(/(")/gm,"")

            request=request.clone({
                setHeaders:{
                    Authorization: `Bearer ${token}`
                }
            })
        }
        return next.handle(request);
    }

}