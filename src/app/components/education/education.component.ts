import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/Education';
import { EduService } from 'src/app/services/edu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Edu_eng : Education[] = [];
  Edu_fr : Education[] = [];
  lang : any | string = "";
  constructor(private eduService:EduService, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    this.Edu_eng = this.eduService.getEduEng();
    this.Edu_fr = this.eduService.getEduFr();
  }

}
