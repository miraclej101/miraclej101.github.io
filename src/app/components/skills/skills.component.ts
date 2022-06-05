import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faAngular, faBootstrap, faPhp, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  faCheck = faCheck;
  faHtml5 = faHtml5;
  faCss3 = faCss3Alt;
  faJsSquare = faJsSquare;
  faAngular = faAngular;
  faBootstrap = faBootstrap;
  faPhp = faPhp;
  faPython = faPython;
  faJava = faJava;
  soft_skills : {[key:string]:string[]} = {
    eng:["project management",
      "learn fast",
      "keen on new technology",
      "diligent & responsibility",
      "pragmatic",
      "initiative",
      "organisation skill",
      "decision maker"],
    fr:["gestion de projet",
      "apprendre vite",
      "passionné par les nouvelles technologies",
      "diligent et responsabilité",
      "pragmatique",
      "initiative",
      "compétence d’organisation",
      "décideur"],
  } 

  ref : {[key:string]:string} = {
    eng:'by',
    fr:'par'
  }
 lang:any|string="eng";
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
  }

}