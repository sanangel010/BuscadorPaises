import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private PaisService: PaisService ) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    
    this.PaisService.buscarCapital( this.termino )
    .subscribe( (paises) => {
        
        //Manejo alternativo del error ya que no entra.
        if(paises.length == undefined)
        {
          this.hayError = true; 
          this.paises = [];
        }
      
      this.paises = paises;

        //  if(resp.status == '404')
        //    this.hayError = true;  

    }, (error) => {
      console.log('Error del observable.');
      this.hayError = true;
      this.paises = [];
    });
  }

}
