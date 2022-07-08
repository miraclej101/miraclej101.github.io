import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faEarthAmericas = faEarthAmericas;
  faEarthEurope = faEarthEurope;
  lang : string ='eng';
  nav_list = {
    eng:['about','experience','education','skills','certifications','languages','activities & interests'],
    fr:['profil','expériences','formations & diplômes','compétences','certifcations','langues',"centres d'intérêt"]
  } 

  link_list : string[] = ['about','experience','education','skills','certifications','languages','interests'];
  nav_items :string[] = [];
  @Output() langChange : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.nav_items = this.nav_list['eng'];
  }

  changeVersion(version:string){
    if (version =='fr'){
      this.nav_items = this.nav_list['fr'];
    }
    else{
      this.nav_items = this.nav_list['eng'];  
    } 
    this.lang = version;
    this.langChange.emit(version);
  }
  getLang(){
    return this.lang;
  }

}
