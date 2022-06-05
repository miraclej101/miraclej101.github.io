import { Exp } from './../../Exp';
import { Component, OnInit} from '@angular/core';
import { ExpService } from 'src/app/services/exp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  Exps_eng : Exp[] = [];
  Exps_fr : Exp[] = [];
  lang : any|string ="";
  constructor(private expService:ExpService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    this.Exps_eng = this.expService.getExpsEng()   
    this.Exps_fr = this.expService.getExpsFr();
  }

}
