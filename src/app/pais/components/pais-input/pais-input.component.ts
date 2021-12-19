import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  // Se va a emitir el valor el valor del input/formulario del componente al
  // componente padre.
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Se crea una propiedad para.
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = "";

  // Este se dispara solo una vez, cuando el comeponente es inicialziado.
  ngOnInit(): void {
    // Se hace la suscripción.    
    this.debouncer
    .pipe(
      // debounceTime: permite hacer un delay de avcuerdo a un parámetro de tiempo.
      debounceTime(300) // 300 milesimas de segundo.
    ) // pipe: permite transformar la salida del suscribe.
    .subscribe( valor => {
      console.log('debouncer:', valor );
      this.onDebounce.emit( valor );
    }

    )
  }

  // Se emite el valor al componente por pais-pais.component.ts
  buscar () {
    this.onEnter.emit( this.termino );
  }

  // Se conecta al deboubcer para estar emitiendo el valor del termino de busqueda.
  teclaPresionada(  ) {
      this.debouncer.next( this.termino );
  }

}
