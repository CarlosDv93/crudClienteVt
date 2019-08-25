import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaPessoasComponent } from './cliente-form/lista-pessoas/lista-pessoas.component';
import { NgxCpfCnpjModule } from  'ngx-cpf-cnpj';
import { routing } from './app.routes';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ListaPessoasComponent,
    PessoaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCpfCnpjModule,
    routing,
    TextMaskModule
  ],
  providers: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
