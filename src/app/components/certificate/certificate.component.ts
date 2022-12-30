import { Component, OnInit } from '@angular/core';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Certificate } from '../../Certificate';
import { CertService } from 'src/app/services/cert.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  faCertificate = faCertificate;
  certificates : Certificate[] = [];
  lang:string|any = 'eng';
  constructor(private certService:CertService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    this.certificates = this.certService.getCertificate();
  }

}
