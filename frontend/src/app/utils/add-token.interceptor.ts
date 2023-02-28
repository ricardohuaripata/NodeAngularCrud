import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from '../services/error.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _errorService: ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');

    if(token) {
      
      request = request.clone({ setHeaders: { Authorization: 'Bearer ' + token }});
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        // si el usuario no tiene token
        if(error.status === 401) {

          this._errorService.msgError(error);
          this.router.navigate(['/account/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
