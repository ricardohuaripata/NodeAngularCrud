import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService) { }

  msgError(event: HttpErrorResponse) {
    if(event.error.msg != null) {
      // mostrar mensaje de errores programados, por ej: 'contraseña incorrecta'(login), 'ya existe un username'(registro)
      this.toastr.error(event.error.msg, 'Error');
    }else {
      // mostrar mensaje de errores desconocidos del backend
      this.toastr.error('Vaya, algo anda mal', 'Error');
    }
  }
  
}
