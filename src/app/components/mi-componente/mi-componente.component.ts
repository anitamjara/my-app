import { Component } from '@angular/core';

@Component ({  //Caracteristicas, Propiedades y Directivas
	//Obligatoriamente tiene estas dos propiedades
	selector:'mi-componente', //La etiqueta a nivel html
	//template:'<h1>{{titulo}}<h1>', //Es el html tambien puede ser la url o vista separada.
	//Es mejor definir una vista
	templateUrl:'./mi-componente.component.html',
})

export class MiComponente{
	public titulo: string; //defino mis propiedades y el tipo de dato
	public year:number;
	public mostrarPeliculas:boolean;

	constructor(){
		this.titulo="Hola Mundo"; //Le doy un valor a mi propiedad
		this.year=2020; //Tipo de dato number, ver que define distinto sin comillas por ejemplo.
		this.mostrarPeliculas=true;

		console.log("Componente Anita se ha cargado");
	}

	ocultarPeliculas(){
		this.mostrarPeliculas=false;
	}
}

//Una vez que se crea el componente hay que cargarlo en el app.module.ts