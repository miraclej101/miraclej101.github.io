import { LanguagesComponent } from './components/languages/languages.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestsComponent } from './components/interests/interests.component';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path:'about/:lang', component: AboutComponent},
  { path:'experience/:lang', component: ExperiencesComponent},
  { path:'education/:lang', component: EducationComponent},
  { path:'skills/:lang', component:SkillsComponent},
  { path:'languages/:lang', component:LanguagesComponent},
  { path:'interests/:lang',component:InterestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
