import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //  Se crean los end points para la base del api.
  private apiUrl: string = 'https://restcountries.com/v2'; 

  get httpParams () {
    return new HttpParams().set( 'fields', 'fields=name,,name,capital,alpha2Code,flags,population' );
  }  

  constructor( private http: HttpClient ) { }

  // Método para obtener el país en base al nombre.
  buscarPais ( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${termino}`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

    // Método para obtener el país en base a  la capital.
  buscarCapital ( termino: string ): Observable<Country[]> {

      const url = `${ this.apiUrl }/capital/${termino}`;
      return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  // Método para obtener el país en base a cósigo Alpha.
  getPaisByAlpha ( id: string ): Observable<Country[]> {

      const url = `${ this.apiUrl }/alpha/${id}`;
      return this.http.get<Country[]>( url );
  }

    // Método para obtener el país en base a la region.
    buscarRegion ( region: string ): Observable<Country[]> {

      // Esto se podria hacer qui, pero como los otros métodos tambien van a usar los params
      // se declara de forma global en un get.
      // const httpParams = new HttpParams()
      // .set( 'fields', 'fields=name,capital,alpha2Code,flags,population' );
      
      const url = `${ this.apiUrl }/continent/${region}`;
      return this.http.get<Country[]>( url, { params: this.httpParams } )
              .pipe(
                tap( console.log )
              )
  }

}
