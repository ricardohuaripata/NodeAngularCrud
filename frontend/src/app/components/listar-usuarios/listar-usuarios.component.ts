import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})

export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: Usuario[] = [];
  // BARRA DE CARGA
  loading: boolean = false;

  constructor(private _usuarioService: UsuarioService) {

  }

  ngOnInit(): void {
    this.obtenerListaUsuarios();
  }

  obtenerListaUsuarios() {

    this.loading = true;

    setTimeout(() => {

      this._usuarioService.getListUsers().subscribe((data: Usuario[]) => {
        this.listaUsuarios = data;
        this.loading = false;

      });

    }, 500);


  }

}
