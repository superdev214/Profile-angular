import { Component, OnInit } from '@angular/core';
import { UIRouterModule } from "@uirouter/angular";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { GlobalVariable } from '../global_variable';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  id! : number;
  curNavItem : string = "Home";
  constructor(private Location : Location) {

    this.curNavItem = this.Location.path().slice(1);

   }

  ngOnInit(): void {
    // this.curNavItem= GlobalVariable.navItem;
  }
  setNavItem = (item:string) : void => {
      GlobalVariable.navItem = item;
  }

}
