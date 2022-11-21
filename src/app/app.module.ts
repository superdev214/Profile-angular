import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from "@uirouter/angular";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './component/nav/nav.component';
import { SkillComponent } from './component/skill/skill.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CounterComponent } from './component/counter/counter.component';
const helloState = { name: "hello", url: "/Home", component: HomeComponent };
const aboutState = { name: "about", url: "/About", component: AboutComponent };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    SkillComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: [helloState, aboutState], useHash: true }),
    MatProgressBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
