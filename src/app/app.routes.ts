import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { CursosComponent } from './cursos/cursos.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { PalestrasComponent } from './palestras/palestras.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { MsgSucessoComponent } from './msg-sucesso/msg-sucesso.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'hackathons', component: HackathonComponent},
  {path: 'palestras', component: PalestrasComponent},
  {path: 'workshops', component: WorkshopsComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'sucesso', component: MsgSucessoComponent},
]
