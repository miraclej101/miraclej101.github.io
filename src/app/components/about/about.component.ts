import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faYoutube = faYoutube;
  lang :any|string ="";
  description = [ 
   "Searching for an internship in Data Science or web/application development",
   "Profile motivé, recherche un stage en data analyste, ou web/application développement"
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    console.log(this.lang);
  }
  
}
