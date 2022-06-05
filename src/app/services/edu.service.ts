import { Injectable } from '@angular/core';
import { Education } from '../Education';
import { EDUCATIONS_ENG, EDUCATIONS_FR } from '../education_items_eng';

@Injectable({
  providedIn: 'root'
})
export class EduService {

  constructor() { }

  getEduEng(): Education[] {
    return EDUCATIONS_ENG;
  }
  getEduFr(): Education[] {
    return EDUCATIONS_FR;
  }
}
