import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService) {}

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary mr-1'
      : 'btn btn-outline-primary mr-1';
  }

  activarRegion(region: string) {

    // Para que en caso de ser la misma región ya no se cargue de nuevo.
    if( region === this.regionActiva ) { return; }

    this.paises = [];
    this.hayError = false;
    this.regionActiva = region;

    this.PaisService.buscarRegion(this.regionActiva).subscribe(
      (reg) => {
        this.paises = reg;
      },
      (error) => {
        console.log('Error del observable:');
        console.log(error);
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
