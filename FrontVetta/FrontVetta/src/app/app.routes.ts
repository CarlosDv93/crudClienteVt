import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

export const APP_ROUTES: Routes = [
    {path: "", component: ClienteFormComponent},
    {path: "pessoa", component: ClienteFormComponent},
    {path: "pessoa/:id", component: PessoaFormComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);