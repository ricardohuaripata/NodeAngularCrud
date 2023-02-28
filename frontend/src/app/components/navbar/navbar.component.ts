import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  form: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      buscar: [''],
    })
  }

  ngOnInit(): void {
  }

  buscarProductos() {

    const buscar = this.form.value.buscar;

    if(buscar == '') {
      // si la api recibe algun signo como parametro, devolvera por defecto toda la lista de productos
      this.router.navigate(['/productos/buscar/*']);
    } else {
      this.router.navigate(['/productos/buscar/' + buscar]);

    }

  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/account/login']);
  }

}