import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatillaEduComponent } from './components/educacion/platilla-edu/platilla-edu.component';
import { PlatillaCrearComponent } from './components/experencia-lab/platilla-crear/platilla-crear.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlatillaProyectosComponent } from './components/proyecto/platilla-proyectos/platilla-proyectos.component';
import { PlantillaSkillComponent } from './hys-skill/plantilla-skill/plantilla-skill.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:PlatillaCrearComponent},
  {path:'nuevaedu',component:PlatillaEduComponent},
  {path:'nuevopro',component:PlatillaProyectosComponent},
  {path:'nuevaskill',component:PlantillaSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
