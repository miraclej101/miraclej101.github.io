import { Injectable } from '@angular/core';
import { Exp } from '../Exp';
import { EXPS_ENG, EXPS_FR } from '../exp_items_eng';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor() { }

  getExpsEng(): Exp[]{
    return EXPS_ENG;
  }
  getExpsFr() : Exp[]{
    return EXPS_FR;
  }
}
