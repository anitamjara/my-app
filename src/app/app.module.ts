import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

//Cargo los componentes y para que funcionen hay que agregarlos a Declaratios
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { CommonModule } from '@angular/common';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EsParPipe } from './pipes/espar.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, //Si declaro aca mi componente despues lo puedo usar en cualquier parte de la aplicacion
    MiComponente, 
    PeliculasComponent, 
    HeaderComponent, 
    SliderComponent, 
    SidebarComponent, 
    FooterComponent, 
    HomeComponent, 
    BlogComponent, 
    FormularioComponent, 
    PaginaComponent, 
    ErrorComponent, 
    PeliculaComponent,
    EsParPipe
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [appRoutingProviders], //Acá voy a cargar servicios
  bootstrap: [AppComponent] //Acá voy a cargar el componente principal sobre el cual va a cargar toda la aplicación.
})
export class AppModule { }
