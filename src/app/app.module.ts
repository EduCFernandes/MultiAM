import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'

import {FormsModule} from '@angular/forms'

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerPrincipalComponent } from './home/banner-principal/banner-principal.component';
import { FooterComponent } from './footer/footer.component';
import { EmpresaComponent } from './home/empresa/empresa.component';
import { ServicosMultiComponent } from './home/servicos-multi/servicos-multi.component';
import { CursosComponent } from './cursos/cursos.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaCursosComponent } from './cursos/lista-cursos/lista-cursos.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { PalestrasComponent } from './palestras/palestras.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ListaHackathonsComponent } from './hackathon/lista-hackathons/lista-hackathons.component';
import { ListaPalestrasComponent } from './palestras/lista-palestras/lista-palestras.component';
import { ListaWorkshopsComponent } from './workshops/lista-workshops/lista-workshops.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { FormularioComponent } from './contato/formulario/formulario.component';
import { MsgSucessoComponent } from './msg-sucesso/msg-sucesso.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerPrincipalComponent,
    FooterComponent,
    EmpresaComponent,
    ServicosMultiComponent,
    CursosComponent,
    PrincipalComponent,
    ListaCursosComponent,
    HackathonComponent,
    PalestrasComponent,
    WorkshopsComponent,
    ListaHackathonsComponent,
    ListaPalestrasComponent,
    ListaWorkshopsComponent,
    ContatoComponent,
    SobreComponent,
    FormularioComponent,
    MsgSucessoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
