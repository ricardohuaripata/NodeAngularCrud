import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit{
  form: FormGroup;
  loading: boolean = false;
  id: number;
  accion: string = 'Agregar';

  constructor(private fb: FormBuilder, private _productService: ProductoService, 
    private toastr: ToastrService, private router: Router, private aRouter: ActivatedRoute) {

    this.form = this.fb.group({
      // validar campo requerido
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [null, Validators.required],
      existencias: [null, Validators.required]
    }),
    // para capturar id de la URL en caso de que se acceda mediante EDITAR
    this.id = Number(aRouter.snapshot.paramMap.get('id'));

  }

  // funcion que se ejecuta al iniciar el componente
  ngOnInit(): void {
    if(this.id != 0) {
      // si el id es 0 significara que se el usuario ha dado click a un boton de editar
      this.accion = 'Editar';
      this.obtenerProducto(this.id);
    }
  }

  obtenerProducto(id: number) {

    this.loading = true;
    // BARRA DE CARGA
    setTimeout(() => {

      this._productService.getProduct(id).subscribe((data: Producto) => {
        // pintamos en el formulario la informacion del producto seleccionado
        this.form.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          precio: data.precio,
          existencias:  data.existencias
        })
        this.loading = false;

      });

    }, 500);

  }
  // FUNCION TANTO PARA AÑADIR PRODUCTO COMO PARA EDITAR PRODUCTO
  addProduct() {
    // creamos un objeto con los datos del formulario
    const producto : Producto = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      precio: this.form.value.precio,
      existencias: this.form.value.existencias
    };


    if(this.id != 0) {
      // EDITAR
      producto.id = this.id; // le asignamos el id ya que en el formulario no se esta asignando
      this._productService.updateProduct(this.id, producto).subscribe(() => {
        this.toastr.info('El producto '+ producto.nombre + ' ha sido actualizado', 'Producto actualizado');
      });

    } else {
      // AGREGAR
      this._productService.saveProduct(producto).subscribe(() => {
        this.toastr.success('El producto '+ producto.nombre + ' ha sido añadido a la base de datos', 'Producto añadido');
      });

    }

    this.router.navigate(['/productos']);

  }

}
