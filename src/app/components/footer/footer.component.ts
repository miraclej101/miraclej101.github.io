import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 description : {[key:string]:string} = { 
   eng:"Made by Angular13 and a Start Bootstrap template",
   fr:"Réalisé par Angular13 et un template de Start Bootstrap"
 }
 @Input() lang:string="eng";
  constructor() { }

  ngOnInit(): void {
  }
 
}
