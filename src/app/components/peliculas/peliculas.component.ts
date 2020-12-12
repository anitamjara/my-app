import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.services';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})

//OnInit uno de los metodos del cicl de vida del componente.
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas!: Array<Pelicula>;
  public favorita!: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) { //no se le debe meter logica adentro
    
    this.titulo = "Componente Pelicula";
    this.peliculas = this._peliculaService.getPeliculas();
    /*Lo llevamos al servicio
    [
      new Pelicula("Spiderman",2019,"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Spiderman_warner.jpg/1200px-Spiderman_warner.jpg"),
      new Pelicula("Batman",2018,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDxiJMCNaWnrN-lI5ogdBeOF6s5024GRDSg&usqp=CAU"),
      new Pelicula("Superman",1989,"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"),
    ];*/
    this.fecha = new Date(2020, 8, 12);

    console.log("constructor lazado");
  }

  ngOnInit(): void { //aca si se pueden funcionalidades
    
    console.log(this.peliculas);
    console.log("componente iniciado");
    console.log(this._peliculaService.holamundo());
  }

  //Otro metodo que usa mucho es
  ngDoCheck(){
    console.log("Docheck lanzado");
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";

  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar de la ejecución");
  }

  mostrarFavorita(event: { pelicula: Pelicula; }){
    this.favorita = event.pelicula;
  }
}
