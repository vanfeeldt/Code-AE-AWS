import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  year = new Date().getFullYear();
  //public linkTheme =document.querySelector('#theme');

  constructor(private settingsService: SettingsService) { }

  /*ngOnInit(): void {
   // const url= `./assets/css/colors/${theme}.css`;

   const url= localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href',url);
    //localStorage.setItem('theme',url);
  }*/

  ngOnInit(): void {
    customInitFunctions();
  }

}
