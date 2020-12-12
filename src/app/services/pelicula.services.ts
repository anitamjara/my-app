import { Injectable } from '@angular/core';
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{
    
    public peliculas!: Array<Pelicula>;

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman",2019,"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Spiderman_warner.jpg/1200px-Spiderman_warner.jpg"),
            new Pelicula("Batman",2018,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDxiJMCNaWnrN-lI5ogdBeOF6s5024GRDSg&usqp=CAU"),
            new Pelicula("Superman",1989,"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"),
          ];
    }

    holamundo(){
        return 'servicio creado';
    }

    getPeliculas(){
        return this.peliculas;
    
    }
}