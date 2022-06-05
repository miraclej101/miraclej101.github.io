import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  faDumbbell = faDumbbell;
  lang:any|string ="eng"
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
  }

}
