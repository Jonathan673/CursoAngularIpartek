import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    
    //pATH vacio es mi página inicial
    {path:'', component:ListadoComponent},
    {path:'formulario', component:FormularioComponent},
];
