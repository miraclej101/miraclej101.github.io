import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ExpItemComponent } from './components/exp-item/exp-item.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationComponent } from './components/education/education.component';
import { EduItemsComponent } from './components/edu-items/edu-items.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InterestsComponent } from './components/interests/interests.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { FooterComponent } from './components/footer/footer.component';
import { CertificateComponent } from './components/certificate/certificate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ExpItemComponent,
    ExperiencesComponent,
    EducationComponent,
    EduItemsComponent,
    SkillsComponent,
    InterestsComponent,
    LanguagesComponent,
    FooterComponent,
    CertificateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
