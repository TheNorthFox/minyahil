import { Component } from '@angular/core';
import { faAngular, faAws, faJava, faJenkins, faJira, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import {faCoffee, faLeaf } from '@fortawesome/free-solid-svg-icons'
import * as react from '@grapecity/gcpdfviewer/typings/vendor/react/react';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faCoffee = faCoffee;
  faLeaf = faLeaf;
  java = faJava;
  jira = faJira;
angular = faAngular;
aws = faAws;
jenkins = faJenkins;
js = faJs;
react = faReact;

}
