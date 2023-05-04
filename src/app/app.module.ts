import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { LongitudComponent } from './longitud/longitud.component';
import { MasaComponent } from './masa/masa.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { RouterModule, Routes } from "@angular/router";
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { MenuConversionComponent } from './menu-conversion/menu-conversion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { MenuFisicaComponent } from './menu-fisica/menu-fisica.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MruComponent } from './mru/mru.component';
import { MruvComponent } from './mruv/mruv.component';
import { NewtonComponent } from './newton/newton.component';

const routes: Routes = [
  { path: 'longitud', component: LongitudComponent },
  { path: 'masa', component: MasaComponent },
  { path: 'tiempo', component: TiempoComponent },
  { path: 'menuConversion', component: MenuConversionComponent},
  { path: 'menuPrincipal', component: MenuPrincipalComponent},
  { path: 'personalInformation', component: PersonalInformationComponent},
  { path: 'menuFisica', component: MenuFisicaComponent},
  { path: 'mru', component: MruComponent},
  { path: 'mruv', component: MruvComponent},
  { path: 'newton', component: NewtonComponent},
  { path: '**', redirectTo: 'menuPrincipal', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LongitudComponent,
    MasaComponent,
    TiempoComponent,
    MenuConversionComponent,
    MenuPrincipalComponent,
    PersonalInformationComponent,
    MenuFisicaComponent,
    MruComponent,
    MruvComponent,
    NewtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
