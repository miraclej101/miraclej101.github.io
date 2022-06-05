import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  faStar = faStar;
  lang_list :{[key:string]:Languages[]} ={
    eng:[
      {
        name_lang:'Thai',
        description:'Maternal',
        level:5,
      },
      {
        name_lang:'English',
        description:'Proficient',
        level:5,
      },
      {
        name_lang:'French',
        description:'Advance',
        level:4,
      }
    ],
    fr:[
      {
        name_lang:'Thaïlandais',
        description:'Maternal',
        level:5,
      },
      {
        name_lang:'Anglais',
        description:'Expérimenté (C1)',
        level:5,
      },
      {
        name_lang:'Français',
        description:'Supérieur (C1)',
        level:4,
      }
    ]
  }
 lang:any|string="eng";
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
  }

}

interface Languages{
  name_lang:string,
  description:string,
  level:number,
}