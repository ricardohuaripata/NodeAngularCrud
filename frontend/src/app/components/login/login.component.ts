import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ErrorService } from 'src/app/services/error.service'; // servicio para mostrar mensajes de errores devueltos por el backend

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private _usuarioService: UsuarioService, private router: Router, private _errorService: ErrorService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  ngOnInit(): void {

  }

  iniciarSesion() {

    const usuario : Usuario = {
      username: this.form.value.username,
      password: this.form.value.password
    };

    this._usuarioService.login(usuario).subscribe({
      // si la peticion ha tenido exito
      next: (data) => {
        this.toastr.success("Bienvenido usuario '" + usuario.username + "", "Login correcto");
        this.router.navigate(['/']);
        localStorage.setItem('token', data)
        
      },
      // si se produce algun error en la peticion
      error: (event: HttpErrorResponse) => {
        this._errorService.msgError(event);
      }

    })

  }

}
