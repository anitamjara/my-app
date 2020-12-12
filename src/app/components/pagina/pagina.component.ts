import { Component, OnInit } from '@angular/core';

//Para pasar parametros hay que importar estas librerias:
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre!: string;
  public apellido!: string;

  constructor(
    //Parametros
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params) => {
      this.nombre= params.nombre;
      this.apellido= params.apellido;
    });
  }

  redireccion(){
    this._router.navigate(['/pagina','juana', 'jarhuertasa']);
    //this._router.navigate(['/formulario']);
    //alert("METODO REDIRECCION");
  }

}
