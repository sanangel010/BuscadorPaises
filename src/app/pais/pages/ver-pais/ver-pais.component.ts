import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; // operador de transformación.
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // Con el !, le indicas a typescript que va a ser nulo y que no la haga de emoción.
  pais!: Country;

  // Se hace la suscri´ción, para poder saber cualquier cambio en la URL.
  constructor( 
    private activateRouted: ActivatedRoute,
    private paisesService: PaisService 
    ) { }

  ngOnInit(): void {

    /* ESTE CÓDIGO SE PUEDE SIMPLIFICAR CON EL DE MÁS ABAJO */
    // this.activateRouted.params
    // .subscribe(
    //   ({ id }) => {
    //     console.log(id);

    //     this.paisesService.getPaisByAlpha( id )
    //     .subscribe( pais => {
    //       console.log(pais); 
    //     });
    //   }
    // )

    this.activateRouted.params
    .pipe(
      // {{ 
      //  lo que vaya dentro de estas llaves, dentro del argumento de: switchMap
      //  indica una desestructuración de argumentos.
      //  }}
      switchMap( ( { id } ) => this.paisesService.getPaisByAlpha( id ) ),
      tap( console.log ) // tap es un operador que lanza un evento secundario, en este caso recibe el producto del switchMap y lo imprime en consola. 
    )
    .subscribe( pais => this.pais = pais );

  }

}
