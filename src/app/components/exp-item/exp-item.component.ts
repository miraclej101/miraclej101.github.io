import { Component, OnInit, Input } from '@angular/core';
import { Exp } from '../../Exp';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent implements OnInit {
  @Input() exp : any | Exp;
  constructor() { 
    this.exp = "";
  }

  ngOnInit(): void {
  }

}
