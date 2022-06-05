import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/Education';

@Component({
  selector: 'app-edu-items',
  templateUrl: './edu-items.component.html',
  styleUrls: ['./edu-items.component.css']
})
export class EduItemsComponent implements OnInit {

  @Input() edu : any | Education;
  constructor() { }

  ngOnInit(): void {
  }

}
