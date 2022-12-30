import { Injectable } from '@angular/core';
import { Certificate, CERTIFICATE } from '../Certificate';

@Injectable({
  providedIn: 'root'
})
export class CertService {

  constructor() { }

  getCertificate(): Certificate[] {
    return CERTIFICATE;
  }
}
