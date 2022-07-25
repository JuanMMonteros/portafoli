import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperenciaLabComponent } from './components/experencia-lab/experencia-lab.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HysSkillComponent } from './hys-skill/hys-skill.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import{ HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptore-service';
import { PlatillaCrearComponent } from './components/experencia-lab/platilla-crear/platilla-crear.component';
import { PlatillaEduComponent } from './components/educacion/platilla-edu/platilla-edu.component';
import { PlatillaProyectosComponent } from './components/proyecto/platilla-proyectos/platilla-proyectos.component';
import { PlantillaSkillComponent } from './hys-skill/plantilla-skill/plantilla-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    LogoapComponent,
    BannerComponent,
    ExperenciaLabComponent,
    EducacionComponent,
    HysSkillComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PlatillaCrearComponent,
    PlatillaEduComponent,
    PlatillaProyectosComponent,
    PlantillaSkillComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
