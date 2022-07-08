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
  text_eng = `As the world is constantly changing to the digital transformation, certain career paths might not be secured.
          Meanwhile, certain opportunities have arisen. Thus, after earning an advanced French-language certificate, 
          I have undertaken a career change since 2020. Graduated a bachelor degree of computer science in 2 years, 
          I continue for a master degree, Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE) or 
          Computer Methods Applied to Business Management, in September 2022. Ultimately, I aim for a career as data analyst,
          data engineer or full-stack engineer.`;
  text_fr = `Comme le monde évolue constamment vers la transformation numérique, 
          certains parcours professionnels peuvent ne pas être assurés. En revanche, certaines opportunités se présentent. 
          Ainsi, après avoir obtenu un certificat avancé de langue française, j'ai entrepris une reconversion professionnelle depuis 2020. 
          Diplômée d'une licence d'informatique en 2 ans, je continue pour un master, Méthodes Informatiques Appliquées à la Gestion des Entreprises 
          (MIAGE), en septembre 2022. A terme, je vise une carrière d'analyste de données, d'ingénieur data ou d'ingénieur full-stack.`;
  
  description = [this.text_eng,this.text_fr];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.lang = this.activatedRoute.snapshot.paramMap.get('lang');
    console.log(this.lang);
  }
  
}
