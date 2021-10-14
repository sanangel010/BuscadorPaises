import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        // Configuración de la ruta princupla de la aplicación.
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        // Configuración de la ruta princupla de la aplicación.
        path: 'region',
        component: PorRegionComponent
    },
    {
        // Configuración de la ruta princupla de la aplicación.
        path: 'capital',
        component: PorCapitalComponent    
    },
    {
        // Configuración de la ruta princupla de la aplicación.
        path: 'pais/:id',
        component: VerPaisComponent
    },
    { // En el caso que no exista el componente o ruta a la que hay que navegar,
      // se envía a la pagina por defecto.
        path: '**',
        redirectTo: ''
    }
]

@NgModule ({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}