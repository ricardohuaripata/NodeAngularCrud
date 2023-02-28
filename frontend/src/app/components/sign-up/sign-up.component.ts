import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ErrorService } from 'src/app/services/error.service'; // servicio para mostrar mensajes de errores devueltos por el backend

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private _usuarioService: UsuarioService, private router: Router, private _errorService: ErrorService) {
    this.form = this.fb.group({
      // validar campo requerido
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrarUsuario() {
    // construimos un usuario con los datos del formulario
    const usuario : Usuario = {
      username: this.form.value.username,
      password: this.form.value.password,
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
    };

    if(usuario.password != this.form.value.confirmPassword) {
      this.toastr.error('Las contraseñas no coinciden', 'Error');
      return;
    }

    this._usuarioService.signUp(usuario).subscribe({
      // si la peticion ha tenido exito
      next: () => {
        this.toastr.success("Usuario '" + usuario.username + "' registrado con exito", "Usuario registrado");
        this.router.navigate(['/account/login']);
      },
      // si se produce algun error en la peticion
      error: (event: HttpErrorResponse) => {
        this._errorService.msgError(event);
      }
    })

  }

}
